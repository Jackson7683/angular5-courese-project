import * as firebase from 'firebase';
import { Response } from '@angular/http'; 
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private token: string;

    constructor(private router: Router) {}

    signUpWithEmailAndPwd(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (response: Response) => {
                    console.log(`The sign up response is ${JSON.stringify(response)}`);
                    this.router.navigate(['./signin']);
                }
            )
            .catch(error => {
                console.log(`Error occured when creating account using firebase, 
                            ${error.code}: ${error.message}`);
            }); 
    }

    loginWithEmailAndPwd(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response: Response) => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            token => {
                                this.token = token;
                                console.log(`Now navigate user to Home page...`);
                                this.router.navigate(['./homes']);
                            }
                        )    
                        .catch(e => {
                            console.log(e);
                        });
                }
            )
            .catch(error => {
                console.log(`Error occured during signIn, 
                            ${error.code}: ${error.message}`);
            });
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                token => {
                    this.token = token;
                }
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['./signin']);
    }
}