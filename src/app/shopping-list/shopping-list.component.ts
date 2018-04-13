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
  }

  ngOnDestroy() {
    this.newIngredientSubscription.unsubscribe();
  }
}
