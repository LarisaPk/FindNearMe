// Larisa Pyykölä, student number 1702357
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage, // added children
    children: [
      {
        path: 'first',
        loadChildren: '../first/first.module#FirstPageModule'
      },
      {
        path: 'second',
        loadChildren: '../second/second.module#SecondPageModule'
      },
      {
        path: 'subcategory1',
        loadChildren: '../subcategory1/subcategory1.module#Subcategory1PageModule'
      },
      {
        path: 'subcategory2',
        loadChildren: '../subcategory2/subcategory2.module#Subcategory2PageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
