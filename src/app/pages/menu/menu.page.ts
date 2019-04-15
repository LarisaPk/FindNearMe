// Larisa Pyykölä, sudent number 1702357
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
// imports for authentication
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
// added array of pages here and added children of the Second Page
  pages = [
    {
    title: 'First page',
    url: '/menu/first',
    icon : 'home'
    },
    {
      title: 'Second page',
      children: [
        {
          title: 'First Subcategory',
          url: '/menu/subcategory1',
          icon : 'pin'
        },
        {
          title: 'Second Subcategory',
          url: '/menu/subcategory2',
          icon : 'rocket'
        }
      ]
      }
   ];
  selectedPath = '';
// constructor for knowing which item is selected to add styles to it
  constructor(private router: Router, public afAuth: AngularFireAuth) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
   }

  ngOnInit() {
  }
  // logg out function when logout button clicked
  logOut() {
    this.afAuth.auth.signOut().then (() => {
      location.reload();
    });
  }
}
