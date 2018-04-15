import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe('test_recipe_1', 'For test recipe 1', 
        'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg', 
        [
            new Ingredient('Apples', 5),
            new Ingredient('tomato', 10)
        ]),
        new Recipe('test_recipe_2', 'For test fecipe 2', 
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg', 
        [   
            new Ingredient('Bread', 6),
            new Ingredient('Pepper', 5)
        ])
      ]; 
    private subscription: Subscription;

    recipeChanged = new Subject<Recipe>();

    public getRecipes() {
        // return a copy of data object
        return this.recipes.slice();
    }

    public getRecipesById(i: number) {
        return this.recipes[i];
    }

    public addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(recipe);
    }

    public editRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(recipe);
    }

    public deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next();
    }
}