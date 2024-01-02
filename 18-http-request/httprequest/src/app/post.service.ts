import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Subject, throwError } from "rxjs";
import { Post } from "./post.model";


@Injectable({ providedIn: 'root' })
export class PostService {

    error= new Subject<string>();
    url='https://angular-fake-b05dd-default-rtdb.firebaseio.com/posts.json';
    constructor(private http:HttpClient) {

    }
    createAndStorePost(title:string , content:string){
        const postData={title:title,content:content};

        this.http.post<{ name:string}>(
             this.url,
             postData
          ).subscribe(responseData=>{
            console.log(responseData);
            
          },
          error =>{
            console.log('hata alindi');
            console.log(error);
            
            
            this.error.next(error.message);
          }
          )
    }

    fetchPosts(){
        this.http.get<{[ key:string]: Post}>(this.url)
        .pipe(
          map( (responseData : {[ key:string]: Post}) =>{
            const postsArray =[];

            for(const key in responseData){
              if( responseData.hasOwnProperty(key)){

                postsArray.push( { ...responseData[key], id:key});
              }
            }
          }),catchError(errorRes=>{
            console.log('cacthc hata alindi....');
            console.log(errorRes);
            
            return throwError(errorRes);
          })
        );

    }

    declarePost (){
        return this.http.delete(this.url);
    }


}