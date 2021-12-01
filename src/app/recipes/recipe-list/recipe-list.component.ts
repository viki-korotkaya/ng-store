import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // solution without service
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipesServise: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipesServise.getRecipes();
  }
  // solution without service
  // onRecipeSelected(recipe: Recipe): void{
  //   this.recipeWasSelected.emit(recipe);
  // }
}
