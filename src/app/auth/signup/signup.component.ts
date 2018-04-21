import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp() {
    const email = this.signUpForm.value.username;
    const password = this.signUpForm.value.password;
    this.authService.signUpWithEmailAndPwd(email, password);
  }

  onCancel() {
    console.log(`Cancel action is request.`);
  }
}
