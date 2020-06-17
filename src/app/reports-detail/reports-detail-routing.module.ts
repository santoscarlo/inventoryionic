import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsDetailPage } from './reports-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsDetailPageRoutingModule {}
