import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { DataStorage } from '../shared/dataStorage.service';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    private saveSubscription: Subscription;

    constructor(private dataStorage: DataStorage, 
                private recipesService: RecipesService,
                private authService: AuthService,
                private router: Router) {}

    ngOnInit(){
        let authStatus = this.authService.isAuthenticated();
        if(authStatus) {
            this.router.navigate(['/recipes']);
        }else {
            this.router.navigate(['./signin']);
        }
    }

    onSaveRecipes() {
        let url = 'https://angular5-demo-bb163.firebaseio.com/recipes.json';
        let recipes = this.recipesService.getRecipes();
        this.saveSubscription = this.dataStorage.saveRecipes(url, recipes)
            .subscribe(
                (response: Response) => {
                    console.log(response);
                },
                (error: Response) => {
                    console.log(error);
                }
             )
    }

    onFetchRecipes() {
        let url = 'https://angular5-demo-bb163.firebaseio.com/recipes.json';
        this.dataStorage.fetchRecipes(url)
            .subscribe(
                (recipes: Recipe[]) => {
                    console.log(`The respond recipes are: ${JSON.stringify(recipes)}`);
                    if(recipes){
                        this.recipesService.setRecipes(recipes);
                    }
                }
            )
    }

    logout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.saveSubscription.unsubscribe();
    }

}