import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // recipes: Recipe[] = [
  //   new Recipe('test recipe 1', 'For test recipe 1', 
  //   'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
  //   new Recipe('test recipe 2', 'For test fecipe 2', 
  //   'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg')
  // ]; 
  // selectedRecipe: Recipe;
  private recipes: Recipe[];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onRecipeSelect(index: number){
    this.recipeSelected.emit(this.recipes[index]);
    // this.recipesService.selectRecipe(this.recipes[index]);
  }

}
