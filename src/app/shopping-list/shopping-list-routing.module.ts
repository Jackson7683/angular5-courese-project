import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { AuthGard } from '../auth/authGard.service';

const ShoppingListRoutes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGard], children: [
        { path: 'shopping-detail', component: ShoppingEditComponent }
    ]}
];

@NgModule({
   imports: [RouterModule.forChild(ShoppingListRoutes)],
   exports: [RouterModule] 
})
export class ShoppingListRoutingModule {}