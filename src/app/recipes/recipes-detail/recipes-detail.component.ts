import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  activeRecipe: Recipe;
  editMode: boolean = false;
  
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params);
          const id = params['id'];
          this.activeRecipe = this.recipesService.getRecipesById(id);
          console.log(`The activeRecipe changed, new value is: ${JSON.stringify(this.activeRecipe)}`);
        }
      );
  }

  navigateToEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
