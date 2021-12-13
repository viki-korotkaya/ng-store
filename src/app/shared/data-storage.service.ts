import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {exhaustMap, map, take, tap} from 'rxjs/operators';

import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor( private http: HttpClient,
                 private recipeService: RecipesService,
                 private authService: AuthService) {
    }

    storeRecipes(): void {
      const recipes = this.recipeService.getRecipes();
      this.http.put('https://ng-store-56b76-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(res => console.log(res));
    }

    fetchRecipes(): any {
      return this.http.get<Recipe[]>(
            'https://ng-store-56b76-default-rtdb.firebaseio.com/recipes.json')
        .pipe(
          map(recipes => {
            return recipes.map(recipe => {
              return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
          }),
          tap(recipes => {
              this.recipeService.setRecipes(recipes);
          })
        );
    }
}
