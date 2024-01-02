import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy {

  ingredients: Ingredient[] | undefined;

  private igChangedSub:Subscription | undefined;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    console.log('ShoppingListComponent init e geldi');
    
    this.ingredients=this.slService.getIngredients();
    
    this.igChangedSub=this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        
        console.log('atama yapıldı');
        
        this.ingredients=ingredients;
      }
    )
  }

  ngOnDestroy(): void {
    this.igChangedSub?.unsubscribe();
  }
  onEditItem( index:number ){
    this.slService.startedEditing.next(index);
  }


}
