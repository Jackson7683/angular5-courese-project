import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isRecipesActive: boolean = false;

  constructor() {}

  ngOnInit() {
    // initialize the firebase SDK 
    const config = {
      apiKey: "AIzaSyDES0RukB6CELgKF0re7CRgl_yVr0XPA9I",
      authDomain: "angular5-demo-bb163.firebaseapp.com",
      databaseURL: "https://angular5-demo-bb163.firebaseio.com",
      projectId: "angular5-demo-bb163",
      storageBucket: "angular5-demo-bb163.appspot.com",
      messagingSenderId: "976088775961"
    };
    firebase.initializeApp(config);
  }
}
