import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isRecipesActive: boolean = false;

  constructor() {}

  ngOnInit(){
    // this.isRecipesActive = false;
  }

  onHeaderClicked(isRecipesActive: boolean){
    this.isRecipesActive = isRecipesActive;
  }
}
