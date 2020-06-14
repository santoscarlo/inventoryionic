import { Component, OnInit, Input } from '@angular/core';
import {  Product, ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  @Input() product: Product;
    isUpdate = false;

  data = {
    item_name: '',
    item_desc: '',
    item_count: ''
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    if(this.product){ // para malaman kung hindi null tong property nato, ibig sabihin yung modal nasa update mode papa
      this.isUpdate = true;
      this.data = this.product;
    }

  }

}
