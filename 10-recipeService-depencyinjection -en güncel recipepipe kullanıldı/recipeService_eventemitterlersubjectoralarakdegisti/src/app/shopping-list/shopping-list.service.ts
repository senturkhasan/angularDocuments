import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class ShoppingListService {

  //ingredientsChanged =new EventEmitter<Ingredient[]>();
  ingredientsChanged =new Subject<Ingredient[]>();
  private ingredients: Ingredient[]=[
    new Ingredient('Apple',2),
    new Ingredient('Tomato',4),
  ];

  startedEditing =new Subject<number>();
  getIngredients(){
    return this.ingredients.slice();
  }
  getIngredient(index :number){
      return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient: Ingredient []){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index:number, ingredient: Ingredient){
    this.ingredients[index]=ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deletedIngrtedient( index: number ){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());

  }
  constructor() { }
}
