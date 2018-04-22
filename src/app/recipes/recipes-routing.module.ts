import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from "./recipes.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipeNotFoundComponent } from './recipe-not-found/recipe-not-found.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGard } from '../auth/authGard.service';

const recipesRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, canActivate: [AuthGard], children:[
        { path: '', component: RecipeNotFoundComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id/:name', component: RecipesDetailComponent },
        { path: ':id/:name/edit', component: RecipeEditComponent } 
    ]},
]

@NgModule({
    imports: [ RouterModule.forChild(recipesRoutes)],
    exports: [ RouterModule ]
})
export class RecipesRoutingModule {

}