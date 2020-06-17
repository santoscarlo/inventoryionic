import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaterModalPage } from './cater-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CaterModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaterModalPageRoutingModule {}
