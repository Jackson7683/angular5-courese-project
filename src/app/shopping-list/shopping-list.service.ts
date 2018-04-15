import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('tomato', 10)
    ];

    // this cannot be private
    // A subject is better than EventEmitter, since it serves as both Observable and Observer
    // and provide functionalities such as next();
    newIngredientAdded = new Subject<Ingredient>();
    ingredientStartEdited = new Subject<number>();
    ingredientEdited = new Subject<{index: number, value: Ingredient}>();
    ingredientDeleted = new Subject<number>();

    public getIngredients() {
        // if this method returns a copy of array, then on the event subscribe, 
        //  the local reference needs to be updated as well.
        return this.ingredients.slice();
    }

    public getIngredientById(index: number) {
        return this.ingredients[index];
    }

    public addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
    }

    public editIngredient(index: number, value: Ingredient) {
        this.ingredients[index] = value;
    }

    public deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
    }
}