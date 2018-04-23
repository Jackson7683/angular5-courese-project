import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../appRouting.module';

import { HomesComponent } from './homes/homes.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes/recipes.service';
import { DataStorage } from '../shared/dataStorage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGard } from '../auth/authGard.service';

/**
 * export HeaderComponent since it is used in appComponent.
 * 
 * import SharedModule since dropdown directive is used in HeaderComponent
 * import AppRoutingModule since it is used in HeaderComponent
 * 
 * Services can be injected in core module, since it's only injected into the app module.
 */
@NgModule({
    declarations: [
        HeaderComponent,
        HomesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [ShoppingListService, RecipesService, DataStorage, AuthService, AuthGard]
})
export class CoreModule {}