import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CateModalOutPageRoutingModule } from './cate-modal-out-routing.module';

import { CateModalOutPage } from './cate-modal-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CateModalOutPageRoutingModule
  ],
  declarations: [CateModalOutPage]
})
export class CateModalOutPageModule {}
