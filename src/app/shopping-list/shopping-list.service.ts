/* tslint:disable:prefer-const */
import { Subject } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 2)
  ];

  getIngredients(): Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void{
    // for (let ing of ingredients){
    //   this.addIngredient(ing);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
