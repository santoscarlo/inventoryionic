import { Component, OnInit, Input } from '@angular/core';
import { ProductService, Product } from '../services/product.service';
import { ModalController } from '@ionic/angular';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.page.html',
  styleUrls: ['./product-modal.page.scss'],
})
export class ProductModalPage implements OnInit {
  itemnameInput = new FormControl('', Validators.required);

  @Input() product: Product;
  isUpdate = false; // para macheck yung modal kung nagagamit para sa update o hindi

  //data na iuupdate tol
  data = {
    item_name: '',
    item_desc: '',
    item_count: ''
  };
  constructor(
    private  modalCtrl: ModalController,
    private service: ProductService,
  ) { }

  ngOnInit() {
    // console.log(this.product);
    if(this.product){ // para malaman kung hindi null tong property nato, ibig sabihin yung modal nasa update mode papa
      this.isUpdate = true;
      this.data = this.product;
    }
  }

  closeModal(){
      this.modalCtrl.dismiss(null, 'closed');
    }

  onSubmit(form: NgForm){
      const product = form.value;
      if(this.isUpdate){
        this.service.update(product, this.product.id).subscribe(() =>{
          // append id kung sinong id inuupdate.
          product.id = this.product.id;
          console.log(product.id)
          this.modalCtrl.dismiss(product, 'updated')
        })
      }else{
        this.service.create(product).subscribe(response => {
          this.modalCtrl.dismiss(response, 'created')
        })
      }


      // console.log(form.value)
    }

}
