export class Recipe {
    /**
     * Create data model when this type of object is to be used
     * across the whole app 
     * 
     */
    public name: string;
    public description: string;
    public imgPath: string;

    constructor(name: string, desc: string, imgPath: string){
        this.name = name;
        this.description = desc;
        this.imgPath = imgPath;
    }
}