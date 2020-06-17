import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaterPage } from './cater.page';

const routes: Routes = [
  {
    path: '',
    component: CaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaterPageRoutingModule {}
