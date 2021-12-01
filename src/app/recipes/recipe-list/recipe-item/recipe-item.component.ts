import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // solution without services
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onSelected(): void{
    // solution without services
    // this.recipeSelected.emit();
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
