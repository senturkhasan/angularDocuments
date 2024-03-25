import { Component, Input, OnInit } from '@angular/core';
import { WishItem } from '../../models/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  @Input() wishes :WishItem[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
