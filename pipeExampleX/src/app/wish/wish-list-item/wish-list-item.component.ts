import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';

import  { EventService } from '../../services/EventService';
import { WishItem } from '../../models/wishItem';
 
@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {

  @Input()wish !:WishItem; 
  
  constructor(private events:EventService) { }

  ngOnInit(): void {
  }


  toggleFullFilled(){
    this.wish.isCompleted=!this.wish.isCompleted;
  }

  get cssClasses(){
    return {'strikeout text-muted': this.wish.isCompleted};
  }

  removeWish(){
    console.log('x'+this.wish);
    
    this.events.emit('removeWish',this.wish);
  }
}
