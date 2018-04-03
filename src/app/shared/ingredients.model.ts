export class Ingredient {
    /**
     * by declaring the property access and type in the constructor,
     *  it will achieve same effect as declare in the class and initiate them in the constructor
     * e.g.,
     * public name: string;
     * public amount: number;
     * constructor(name: string, amount: number){
     *      this.name = name;
     *      this.amount = amount;
     * }
     */
    constructor(public name: string, public amount: number) {}
}