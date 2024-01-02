import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{

  @ViewChild('nameInput',{static:false}) nameInputRef!: ElementRef; 
  @ViewChild('amountInput',{static:false}) amountInputRef!: ElementRef; 

  @ViewChild('f') slForm! :NgForm;
  subscription!:Subscription;
  editMode=false;
  editedItemIndex!:number;
  editedItem!:Ingredient;


  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription=this.slService.startedEditing
    .subscribe( (index: number)=>{
      this.editMode=true;
      this.editedItemIndex= index;
      this.editedItem=this.slService.getIngredient(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit( form:NgForm ){
    const value =form.value;
    console.log(value);

    const ingName=this.amountInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    //const newIngredient= new Ingredient(ingName,ingAmount);
    const newIngredient= new Ingredient(value.name,value.amount);

    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    form.reset();
    this.editMode=false;
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.slService.deletedIngrtedient(this.editedItemIndex);
    this.onClear();
  }
}
