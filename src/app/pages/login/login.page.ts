// Larisa Pyykölä, student number 1702357
import { Component, OnInit } from '@angular/core';
// imports for authentication
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router'; // added import of router

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
// variables for user email and password

userEmail: string;
userPassword: string;
// message for the toast
message: string;

  constructor(public afAuth: AngularFireAuth, public toastController: ToastController, private router: Router) { }
  ngOnInit() {
  }
  // show toast message
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  // function for the user identification
  async login() {
    const {userEmail, userPassword} = this;

    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(userEmail, userPassword);
      this. message = 'You are logged in';
      this.presentToast(this.message);
      this.router.navigate (['menu', 'first']); // if logged in - navigates to menu
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        this. message = 'Wrong Email or password';
        this.presentToast(this.message);
      }
    }
  }
}
