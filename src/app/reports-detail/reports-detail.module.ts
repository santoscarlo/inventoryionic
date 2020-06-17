import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsDetailPageRoutingModule } from './reports-detail-routing.module';

import { ReportsDetailPage } from './reports-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsDetailPageRoutingModule
  ],
  declarations: [ReportsDetailPage]
})
export class ReportsDetailPageModule {}
