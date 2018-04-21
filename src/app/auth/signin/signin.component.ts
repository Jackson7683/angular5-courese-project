import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signInForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.signInForm.value.username;
    const password = this.signInForm.value.password;    
    this.authService.loginWithEmailAndPwd(email, password);
  }

  onCancel() {
    console.log(`Cancel action is request.`);
  }
}
