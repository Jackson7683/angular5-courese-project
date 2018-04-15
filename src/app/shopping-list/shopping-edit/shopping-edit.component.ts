import { Component, OnInit, OnDestroy, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingEditForm: NgForm;
  ingrSubscription: Subscription;
  private selectedIndex: number;
  private editMode: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingrSubscription = this.shoppingListService.ingredientStartEdited
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.selectedIndex = index;
          
          const selectedIngr = this.shoppingListService.getIngredientById(index);
          this.shoppingEditForm.setValue({
            name: selectedIngr.name,
            amount: selectedIngr.amount
          });
        }
      )
  }

  onAddIngredient(){
    const newIngredient = {
      name: this.shoppingEditForm.value.name,
      amount: this.shoppingEditForm.value.amount
    }
    if(!this.editMode){
      this.shoppingListService.newIngredientAdded.next(newIngredient);
    } else {
      console.log(`The new value for editing is ${JSON.stringify(newIngredient)}`);
      this.shoppingListService.ingredientEdited.next({
        index: this.selectedIndex, 
        value: newIngredient
      });
    }
    this.editMode = false;
    this.shoppingEditForm.reset();
  }

  onClear() {
    this.shoppingEditForm.reset();
    this.editMode = false;
  }

  onDelete() {
    if(this.editMode){
      this.shoppingListService.ingredientDeleted.next(this.selectedIndex);
      this.onClear();
    }
  }

  ngOnDestroy() {
    this.ingrSubscription.unsubscribe();
  }
}
