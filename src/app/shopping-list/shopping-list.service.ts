import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('tomato', 10)
    ];

    // this cannot be private
    newIngredientAdded = new EventEmitter<Ingredient>();

    public getIngredients() {
        // if this method returns a copy of array, then on the event subscribe, 
        //  the local reference needs to be updated as well.
        return this.ingredients.slice();
    }

    public addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
    }
}