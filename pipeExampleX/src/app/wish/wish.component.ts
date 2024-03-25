import { Component, OnInit } from '@angular/core';
import { WishItem } from '../models/wishItem';
import { WishService } from '../services/wish.service';
import { EventService } from '../services/EventService';
 

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  items! :WishItem[];
  filter :any ;

 constructor(private wishService:WishService,events :EventService){
   
     events.listen('removeWish',(wish:any)=>{
       console.log('listen..');
       
       let index =this.items.indexOf(wish);
       this.items.slice(index,1);
     })
 }
 ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any) => {
     this.items=data;
    });
 }

}
