import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGard } from "./auth/authGard.service";
import { HomesComponent } from "./core/homes/homes.component";

/**
 * lazy loading: 
 *  1. using property 'loadChildre' for the component that to be lazyloaded
 *      and pass its path plus the module name with a '#' in between to load
 *  2. if the lazy loaded component is protected by canDirective, then a special property 
 *      'canLoad' is needed for this component in defining the lazy loding routes.
 *      canLoad will take the same guard service, but be sure it is implementing CanLoad as well
 * 
 * preLoadingStrategy: when using lazy loading, the bundled js files are loaded after hitting the url,
 *      however, this will make the loading of this specific component slower. To resolve this, use 
 *      'preLoadingStrategy' property in the forRoot() and pass the stradegy that to be used.
 *     
 *      1. By default, no strategy is used
 *      2. angular provides a PreloadAllModules to preload all lazyloading modules, 
 *           this is a module that can be injected from angular/router
 *      3. strategy can be customized, 
 *           see "https://coryrylan.com/blog/custom-preloading-and-lazy-loading-strategies-with-angular".
 */

const appRoutes: Routes = [
    { path: '', redirectTo: 'homes', pathMatch: 'full'},
    { path: 'homes', component: HomesComponent},
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
})
export class AppRoutingModule {
    
}