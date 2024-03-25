import { Injectable, Input, OnInit } from "@angular/core";
import { WishItem } from "../models/wishItem";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable( {
    providedIn:'root'
})
export class WishService  {

    constructor(private http:HttpClient){

    }
    
    private getStandartOptions():any{
        return  {
            headers:new HttpHeaders({
                'Content-Type':'application/json',
            })
        }
    }

    getWishes(){
        let options = this.getStandartOptions();

        options.params= new HttpParams( {
            fromObject:{
                format:'json'
            }
        });
            //wishes.json ?format=json   -> options saglar
        return this.http.get('assets/wishes.json',options);
    }

    private addWish(wish:WishItem){
        let options =this.getStandartOptions();

        options.headers = options.headers.set('Authorization','value-need-autorization');
        
        this.http.post('assets/wishes.json',wish,options);

    }
}