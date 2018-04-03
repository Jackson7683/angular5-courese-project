import { Recipe } from './recipe.model';

export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe('test recipe 1', 'For test recipe 1', 
        'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
        new Recipe('test recipe 2', 'For test fecipe 2', 
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg')
      ]; 

    private selectedRecipe: Recipe = null;

    public getRecipes() {
        // return a copy of data object
        return this.recipes.slice();
    }

    public addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    public getSelectedRecipe() {
        return this.selectedRecipe;
    }

    public selectRecipe(selectedRecipe: Recipe) {
        this.selectedRecipe = selectedRecipe;
    }

}