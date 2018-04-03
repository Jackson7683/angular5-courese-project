import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] =[
    new Ingredient('Apples', 5),
    new Ingredient('tomato', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(newIngredient: Ingredient){
    this.ingredients.push(new Ingredient(newIngredient.name, newIngredient.amount));
  }
}
