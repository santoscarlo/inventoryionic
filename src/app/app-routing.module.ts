import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 	{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {

    path: 'viewproduct',
    loadChildren: () => import('./viewproduct/viewproduct.module').then( m => m.ViewproductPageModule)
  },

  {
    path: 'product-modal',
    loadChildren: () => import('./product-modal/product-modal.module').then( m => m.ProductModalPageModule)
  },
  {
    path: ':productId',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
