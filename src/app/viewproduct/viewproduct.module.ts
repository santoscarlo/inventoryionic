import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewproductPageRoutingModule } from './viewproduct-routing.module';

import { ViewproductPage } from './viewproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViewproductPageRoutingModule
  ],
  declarations: [ViewproductPage]
})
export class ViewproductPageModule {}
