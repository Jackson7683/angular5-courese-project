import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipeNotFoundComponent } from './recipe-not-found/recipe-not-found.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from './recipes-routing.module';

/**
 * commonModule needs to be injected to every feature module.
 *  it provides the access to all common used directives like ngIf and ngFor
 * 
 * The commonModule is a sub module of BrowserModule which is injected in AppModule
 *  that's why we don't inject commonModule into AppModule.
 * 
 * Another way to do it, is export the commonModule in sharedModule.
 */ 
@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipeItemComponent,
        RecipeNotFoundComponent,
        RecipeEditComponent,
    ],
    imports: [ 
        ReactiveFormsModule, 
        CommonModule,
        SharedModule,
        RecipesRoutingModule 
    ]
})
export class RecipesModule {

}