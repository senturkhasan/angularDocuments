import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  @Input() boxItemIn:any;

  @Output()bowlItem=new EventEmitter();
  
  bowltems={
    bowlName:"Fish",
    bowlCount:212,
    bowlDescription:"Fishing...."
  };
  ngOnInit(): void {
  }

  onBowlsend(){
    this.bowlItem.emit(this.bowltems);
  }

  

}
