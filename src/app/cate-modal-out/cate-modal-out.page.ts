import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ProductService, Product } from '../services/product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cate-modal-out',
  templateUrl: './cate-modal-out.page.html',
  styleUrls: ['./cate-modal-out.page.scss'],
})
export class CateModalOutPage implements OnInit {

  @Input() product : Product;
  isitemOut = false;


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
      this.isitemOut =  true
      this.data = this.product
    }
  }

async  onSubmit(form: NgForm){
    const product = form.value
    console.log(product)

    if(this.isitemOut){
      const validateOut = await this.alertController.create({
        header: 'Hello',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.service.updateOut(product, this.product.id).subscribe(()=>{
                product.id = this.product.id
                // console.log(this.product.id)
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
          }, {text: 'Cancel'}
        ]
      })
      await validateOut.present()

     // this.toastController.create({
     //    duration:2000,
     //    message: 'Redirecting to reports page, please wait'
     //  }).then((res) =>{
     //    res.present()
     //  })
      // this.service.updateOut(product, this.product.id).subscribe(()=>{
      //   product.id = this.product.id
      //   console.log(this.product.id)
      // })
    }
  }



   closeModal(){
     this.modalCtrl.dismiss()
  }

}
