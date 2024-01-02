import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{

  recipes!:Recipe[];
  subscribe!:Subscription;
  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribe=this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe [])=>{
        this.recipes=recipes;
      }
    );
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();//veri hafızada birdaha tutulmaz
  }


}
