import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private ingredients: Ingredient[];
  private newIngredientSubscription: Subscription;
  private editIngredientSubscription: Subscription;
  private deleteIngredientSubscription: Subscription;
  // private selectedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.newIngredientSubscription = this.shoppingListService.newIngredientAdded
      .subscribe(
        (newIngredient: Ingredient) => {
          this.shoppingListService.addIngredient(newIngredient);
          
          this.ingredients = this.shoppingListService.getIngredients();
        }
      );

    this.editIngredientSubscription = this.shoppingListService.ingredientEdited
      .subscribe(
        (res: {index: number, value: Ingredient}) => {
          console.log(JSON.stringify(res));
          this.shoppingListService.editIngredient(res.index, res.value);
          this.ingredients = this.shoppingListService.getIngredients();
        }
      );

    this.deleteIngredientSubscription = this.shoppingListService.ingredientDeleted
      .subscribe(
        (index: number) => {
          this.shoppingListService.deleteIngredient(index);
          this.ingredients = this.shoppingListService.getIngredients();
        }
      );
  }

  onSelectIngredient(index: number) {
    // this.selectedIngredient = this.ingredients[index];
    this.shoppingListService.ingredientStartEdited.next(index);
  }

  ngOnDestroy() {
    this.newIngredientSubscription.unsubscribe();
    this.deleteIngredientSubscription.unsubscribe();
  }
}