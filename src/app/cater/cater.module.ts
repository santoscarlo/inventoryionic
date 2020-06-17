import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaterPageRoutingModule } from './cater-routing.module';

import { CaterPage } from './cater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaterPageRoutingModule
  ],
  declarations: [CaterPage]
})
export class CaterPageModule {}
