import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  private recipes: Recipe[];
  private selectedIndex: number;

  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    try {
      this.selectedIndex = this.route.snapshot.params['id'] || null;
      console.log(`Index is: ${JSON.stringify(this.route.snapshot.params)}`);
    } catch(e) {
      console.log(`Error happened in getting selectedIndex: ${e}`);
    }
  }

  onNavigateToRecipeDetail(index: number){
    this.selectedIndex = index;
    this.router.navigate(['/recipes', this.selectedIndex, this.recipes[this.selectedIndex].name]); 
  }

  onCreateNewRecipe() {
    this.selectedIndex = null;
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
