import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ProductService, Product } from '../services/product.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cater-modal',
  templateUrl: './cater-modal.page.html',
  styleUrls: ['./cater-modal.page.scss'],
})
export class CaterModalPage implements OnInit {

  @Input() product : Product;
  isitemIn = false;

  data = {
    id: '',
    item_name: '',
    item_desc: '',
    item_count: '',
    item_in: '',
    item_out: '',
    status: '',
    date_added: ''

  };

  constructor(
    private modalCtrl: ModalController,
    private service: ProductService,
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    if(this.product){
      this.isitemIn = true
      this.data = this.product;
    }

  }

async  onSubmit(form: NgForm){
  const product = form.value
  // console.log(product)
  if(this.isitemIn){
    const validateIn = await this.alertController.create({
      header: 'Hello',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.service.updateIn(product, this.product.id).subscribe(()=>{
              product.id = this.product.id
              this.toastController.create({
                duration: 2000,
                message: 'Success, redirecting to reports page'
              }).then((res) =>{
                res.present()
              })
              this.loadingController.create({
                duration: 3000
              }).then((red) =>{
                red.present()
                this.router.navigate(['./reports'])
                this.modalCtrl.dismiss()
              })
            })
          }
        },
        {
          text: 'Cancel'
        }
      ]
    })
    await validateIn.present()
  }
}
  // onSubmit(form: NgForm){
  //
  //   const product = form.value
  //   // console.log(form.value)
  //   if(this.isitemIn){
  //     this.service.updateIn(product, this.product.id).subscribe(()=>{
  //       product.id = this.product.id;
  //       // console.log(this.product.id)
  //
  //       this.toastController.create({
  //         duration: 2000,
  //         message: 'Redirection to reports page, please wait...'
  //       }).then(toast => {
  //         toast.present();
  //       })
  //
  //       this.loadingController.create({
  //         duration: 2000
  //       }).then((res)=>{
  //         res.present()
  //
  //         res.onDidDismiss();
  //         this.modalCtrl.dismiss(product, 'updated')
  //         this.router.navigate(['./reports'])
  //       })
  //
  //       // this.modalCtrl.dismiss(product, 'updated')
  //     })
  //   }
  //   else{
  //     this.service.create(product).subscribe(response => {
  //       this.modalCtrl.dismiss(response, 'created')
  //     })
  //   }
  //
  //
  // }

  closeModal(){
     this.modalCtrl.dismiss(null, 'closed');
   }

}
