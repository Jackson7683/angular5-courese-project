import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";
import { Response } from "@angular/http/src/static_response";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class DataStorage {
    constructor(private http: Http) {}

    saveRecipes(url: string, recipes: Recipe[]) {
        return this.http.put(url, recipes);
    }

    fetchRecipes(url: string) {
        return this.http.get(url)
            .map(
                // map method provided by rxjs/Rx will automatically wrap returned data into a new observable
                (response: Response) => {
                    // console.log(`The response from firebase server is: ${JSON.stringify(response)}`);
                    try {
                        const recipes: Recipe[] = response.json();
                        recipes.forEach(recipe => {
                            if(!recipe.ingredients)
                                recipe.ingredients = [];
                        })
                        return recipes;
                    } catch(e) {
                        console.log(e);
                    }
                }
            )
    }
}