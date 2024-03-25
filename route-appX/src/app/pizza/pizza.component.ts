import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input()name :string | undefined;
  @Input()val :number =0;
 
  @Output() changed =new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  inc(){
    this.val=this.val+1;
    this.changed.emit(this.val);
  }

  dec(){ 
    this.val=this.val-1;
    if(this.val<0)
    this.val=0;
    this.changed.emit(this.val  <0 ? 0 :this.val);
  }
 
}
