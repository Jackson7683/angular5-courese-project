import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeItemComponent } from "./recipes/recipes-list/recipe-item/recipe-item.component";
import { RecipeNotFoundComponent } from './recipes/recipe-not-found/recipe-not-found.component';
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children:[
        { path: '', component: RecipeNotFoundComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id/:name', component: RecipesDetailComponent },
        { path: ':id/:name/edit', component: RecipeEditComponent } 
    ]},
    { path: 'shopping-list', component: ShoppingListComponent, children: [
        { path: 'shopping-detail', component: ShoppingEditComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
    
}