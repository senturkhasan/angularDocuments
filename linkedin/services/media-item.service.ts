
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';

import { map,catchError } from 'rxjs/operators';
import { MediaItemResponse } from 'src/app/models/MediaItemResponse';
import {throwError} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class MediaItemService {

  constructor(private http: HttpClient){}
    mediaItems =[
        {
          userId:1,
          id:1,
          title:'Hopa',
          completed:false
        },
        {
          userId:12,
          id:12,
          title:'Hopxa',
          completed:false
        }
      ];


      get(medium:string){
        const getOptions ={
          params:{medium}
        }
     //   return this.mediaItems;
        return this.http.get<MediaItemResponse>('https://jsonplaceholder.typicode.com/todos').pipe(map(response =>{
         // console.log('rs'+response.mediaItems);
          //console.log(response.mediaItems[0].title);
         // console.log('X'+JSON.stringify(response));

          return response;
        }),catchError(this.handleError));
      }

      add(mediaItem:any){
        this.mediaItems.push(mediaItem);
        return this.http.post('',mediaItem).pipe(catchError(this.handleError));
      }
      delete(mediaItem:any){
       //return  this.http.delete(`mediaitems/${mediaItem.id}`).pipe(catchError(this.handleError));
        const index =this.mediaItems.indexOf(mediaItem);
        if(index>=0)
            this.mediaItems.slice(mediaItem,1);
        
      }

      private handleError(error:HttpErrorResponse){
        console.log(error.message);

        return throwError('A data error accourted, please try aga,n');
        
      }
    
}  


