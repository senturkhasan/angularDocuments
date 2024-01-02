import { Component, OnDestroy, OnInit } from '@angular/core';

import {interval,Observable,Subscription, Observer} from 'rxjs';

import { map ,filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  private fisrtSubscribe:Subscription|undefined;
  constructor() { }

  ngOnInit(): void {
      /*this.fisrtSubscribe=interval(1000).subscribe(count=>{
        console.log(count);
      });*/

      const customerSubscribe=Observable.create((observer:Observer<number>)=>{
          let count=0;

     setInterval(()=>{
            observer.next(count);
            if(count===3){
              observer.complete();
            }
            if(count>4){
              observer.error(new Error('Count bigger than 3'));
            }
            count++;
             },1000);
      });

      //this.fisrtSubscribe=customerSubscribe.subscribe
     /* customerSubscribe.pipe( map( (data:number)=>{
          return 'ROund'+(data+1);
      }) );
      */
      this.fisrtSubscribe=customerSubscribe.pipe( filter( (data:number)=>{
          return data >1;
      }),map( (data:number)=>{
        return 'ROund'+(data+1);
        }) ).subscribe((data: any)=>{
        console.log('data:'+data);

          },(error: { message: any; })=>{
            console.log(error);
            alert(error.message);
            
          },
          ()=>{
            console.log('completed');
            
          });

      
  }

  ngOnDestroy(){
    this.fisrtSubscribe?.unsubscribe();
    
  }
}
