import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CateModalOutPage } from './cate-modal-out.page';

const routes: Routes = [
  {
    path: '',
    component: CateModalOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CateModalOutPageRoutingModule {}
