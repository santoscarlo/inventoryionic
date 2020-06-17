import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../services/product.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { CaterModalPage } from '../cater-modal/cater-modal.page';
import { CateModalOutPage } from '../cate-modal-out/cate-modal-out.page';


@Component({
  selector: 'app-cater',
  templateUrl: './cater.page.html',
  styleUrls: ['./cater.page.scss'],
})
export class CaterPage implements OnInit {
  products: Product[];
  constructor(
    private service:  ProductService,
    private modalCtrl: ModalController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(response =>{
      this.products = response;
      // console.log(response)
    })
  }
  //
  // async ionViewDidEnter(){
  //   const loadingwhileviewingCaterProduct = await this.loadingController.create({
  //     duration: 2000,
  //   })
  //   await loadingwhileviewingCaterProduct.present()
  // }

  itemIn(product: Product){
    // console.log(caterproduct)
    // console.log(product)
    this.modalCtrl.create({
      component: CaterModalPage,
      componentProps: {product}
    }).then(modal =>{
      modal.present()
    })

  }

async  itemOut(product: Product){
    // console.log(product)
  const caterModalOut = await this.modalCtrl.create({
    component: CateModalOutPage,
    componentProps: {product}
  })
  await caterModalOut.present()
    // this.modalCtrl.create({
    //   component: CaterModalPage,
    //   componentProps: {caterproduct}
    // }).then(modal =>{
    //   modal.present()
    // })
  }


  filterProductData(event: any){
    this.service.getAll().subscribe(res =>{
      this.products = res;
      const val = event.target.value;
      if(val && val.trim() !== ''){
        this.products = this.products.filter((product) => {
          return (product.item_name.toLowerCase().indexOf(val.toLowerCase()) >-1)
        })
      }
    })


  }

}
