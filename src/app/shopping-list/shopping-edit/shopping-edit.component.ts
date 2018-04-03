import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() IngredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    // console.log(this.nameInput.nativeElement.value);
    // console.log(this.amountInput.nativeElement.value);  
    const newIngredient = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    }
    this.IngredientAdded.emit(newIngredient);
  }
}
