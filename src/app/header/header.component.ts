import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    /**
     * make sure import EventEmitter from @angular/core, not anything else,
     *  they won't work
     */
    @Output() headerClicked = new EventEmitter<boolean>();
    isRecipesActivated: boolean;

    ngOnInit(){
        this.isRecipesActivated = false;
    }

    onRecipesClick(){
        this.isRecipesActivated = true;
        this.headerClicked.emit(this.isRecipesActivated);
        console.log(`Recipes clicked, isRecipesActivated: ${this.isRecipesActivated}`);
    }

    onShoppingListClick(){
        this.isRecipesActivated = false;
        this.headerClicked.emit(this.isRecipesActivated);
        console.log(`Shopping List clicked, isRecipesActivated: ${this.isRecipesActivated}`);
    }
}