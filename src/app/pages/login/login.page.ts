import { Component, OnInit } from '@angular/core';
// imports for authentication
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

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

message: string;

  constructor(public afAuth: AngularFireAuth, public toastController: ToastController) { }
  ngOnInit() {
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async login() { // function for the user identification
    const {userEmail, userPassword} = this;

    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(userEmail, userPassword);
      this. message = 'You are logged in';
      this.presentToast(this.message);
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        this. message = 'Wrong Email or password';
        this.presentToast(this.message);
      }
    }
  }
}
