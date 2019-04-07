// Larisa Pyykölä, student number 1702357

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // added import

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FontAwesomeModule, // added this
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page,  }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
