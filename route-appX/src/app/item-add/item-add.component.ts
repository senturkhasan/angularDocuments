import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Output() newItemEvent =new EventEmitter<string>();
  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }
}
