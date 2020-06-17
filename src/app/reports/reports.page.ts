import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../services/product.service';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { ReportsDetailPage } from '../reports-detail/reports-detail.page';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

    products: Product[];

  constructor(
    private service: ProductService,
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(response =>{
      this.products = response
      // console.log(response)
    })
  }




  async clickmetoSlide(){
    const clickmetoalert = await this.alertCtrl.create({
      header: 'Note',
      message: 'Slide each item, to proceed transactions',
      buttons: [
        {
          text: 'Okay'
        }
      ]
    })
    await clickmetoalert.present()
  }

  filterProductData(event: any){
    this.service.getAll().subscribe(res =>{
      this.products = res
      const val  = event.target.value
      if(val && val.trim() !== ''){
        this.products = this.products.filter((products) => {
          return (products.item_name.toLocaleLowerCase().indexOf(val.toLowerCase())>-1)
        })
      }
    })
  }


async generateIn(id: string){

  const generInloading = await this.loadingController.create({
    duration: 3000
  })
await generInloading.present()
const generIn = await this.modalCtrl.create({
    component: ReportsDetailPage,
    componentProps: {id}
})
await generIn.present()
console.log(id)
}

async generateOut(product: Product){
  console.log(product)
}


}
