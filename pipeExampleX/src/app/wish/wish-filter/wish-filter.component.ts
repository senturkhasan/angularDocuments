import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';

import { WishItem } from '../../models/wishItem';
const filters =[
  (item:WishItem)=> item,
  (item:WishItem)=> !item.isCompleted,
  (item:WishItem)=> item.isCompleted
];

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {

  @Input() filter :any;
  @Output() filterChange =new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.updateFilter('0');
  }

  listFilter :any='0';
 

  updateFilter(value:any) {
    this.filter=filters[value];
    this.filterChange.emit(this.filter);
  }

}
