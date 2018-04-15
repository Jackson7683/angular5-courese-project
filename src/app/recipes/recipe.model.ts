import { Ingredient } from '../shared/ingredients.model';

export class Recipe {
    /**
     * Create data model when this type of object is to be used
     * across the whole app 
     * 
     */
    public name: string;
    public description: string;
    public imgPath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imgPath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imgPath = imgPath;
        this.ingredients = ingredients
    }
}