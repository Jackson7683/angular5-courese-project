import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './appRouting.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AppDropDownDirective } from './shared/appDropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeNotFoundComponent } from './recipes/recipe-not-found/recipe-not-found.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesService } from './recipes/recipes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    RecipeNotFoundComponent,
    RecipeNewComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AppDropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
