import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
 
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() activeRecipe: Recipe;
  
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.recipeSelected
      .subscribe((selectedRecipe: Recipe) => {
        console.log(`The selectedRecipe is ${JSON.stringify(selectedRecipe)}`);
        this.activeRecipe = selectedRecipe;
      });
  }
}
