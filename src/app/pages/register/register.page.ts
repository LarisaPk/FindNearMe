// Larisa Pyykölä, student number 1702357
import { Component, OnInit } from '@angular/core';
// imports for authentication
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import {Router} from '@angular/router'; // added import of router

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
// variables for user email and password

userEmail: string;
userPassword: string;
cuserPassword: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  async register() {
    const {userEmail, userPassword, cuserPassword} = this;
    if (userPassword !== cuserPassword ) {
      return console.error('Password do not match'); // TODO change this to toast message
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(userEmail, userPassword);
      console.log(res); // TODO change this to toast message
      this.router.navigate (['tabs']); // if registered - navigates to tabs page
    } catch (error) {
      console.log(error);
    }
  }
}
