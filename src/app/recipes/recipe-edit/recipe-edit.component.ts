import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { RecipesService } from '../recipes.service';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeEditForm: FormGroup;
  private ingredients: Ingredient[];
  private recipe_id: number;
  private recipe_name: string;
  private editMode: boolean = false;

  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private recipesService: RecipesService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params
      .subscribe(
        (param: {id: number, name: string}) => {
          if(param.id){
            this.editMode = true;
            
            this.recipe_id = param.id;
            this.recipe_name = param.name;

            console.log(`There is new routing parameter, id: ${this.recipe_id}, name: ${this.recipe_name}`);
          }

          this.initForm();          
        }
      )
  }

  private initForm() {
    let recipe = null;
    let ingredientArray = new FormArray([]);

    if(this.editMode){  
      recipe = this.recipesService.getRecipesById(this.recipe_id);
      console.log(`recipe: ${JSON.stringify(recipe)}`);

      recipe.ingredients.map(ingr => {
        ingredientArray.push(new FormGroup({
          name: new FormControl(ingr.name, Validators.required),
          amount: new FormControl(
            ingr.amount, 
            [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
        }))
      });
    }
    
    this.recipeEditForm = new FormGroup({
      name: new FormControl(this.editMode? recipe.name : null, Validators.required),
      imgPath: new FormControl(this.editMode? recipe.imgPath: null, Validators.required),
      description: new FormControl(this.editMode? recipe.description: null, Validators.required),
      ingredients: ingredientArray
    });
  }

  onAddIngredientToRecipe() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(new FormGroup({
      name: new FormControl(null),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    }));
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }

  onSave() {
    console.log(this.recipeEditForm);
    if(this.editMode){
      this.recipesService.editRecipe(this.recipe_id, this.recipeEditForm.value);
    } else {
      this.recipesService.addRecipe(this.recipeEditForm.value);
    }
    this.recipeEditForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    this.recipeEditForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
