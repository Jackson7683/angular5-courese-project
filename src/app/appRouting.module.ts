import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGard } from "./auth/authGard.service";

const appRoutes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
    
}