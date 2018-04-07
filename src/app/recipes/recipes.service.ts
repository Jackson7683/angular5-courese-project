import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe('test_recipe_1', 'For test recipe 1', 
        'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
        new Recipe('test_recipe_2', 'For test fecipe 2', 
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg')
      ]; 

    // private selectedRecipe: Recipe = null;
    recipeSelected = new EventEmitter<Recipe>();

    public getRecipes() {
        // return a copy of data object
        return this.recipes.slice();
    }

    public getRecipesById(i: number) {
        return this.recipes[i];
    }

    public addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }
}