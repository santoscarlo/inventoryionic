import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaterModalPageRoutingModule } from './cater-modal-routing.module';

import { CaterModalPage } from './cater-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaterModalPageRoutingModule
  ],
  declarations: [CaterModalPage]
})
export class CaterModalPageModule {}
