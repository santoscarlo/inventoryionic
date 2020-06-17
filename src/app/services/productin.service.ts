import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.service';


export interface ProductIn {

  id: string;
  item_name: string;
  item_desc: string;
  item_count: string;
  item_in: string;
  // item_out: string;
  date_added: string;
  totals: string;


}

@Injectable({
  providedIn: 'root'
})
export class ProductinService {

  private url = 'http://localhost/clientpresent/api/products';
  private urlproductcharttotal = 'http://localhost/clientpresent/api/prodcharttotal';




  constructor(
    private http: HttpClient
  ) { }


    // getAll(){
    //   return this.http.get<[Product]>(this.url);
    // }
    //
    // get(id: string){
    //   return this.http.get<[Product]>(this.url + '/' + id);
    // }
    // create(product: Product){
    //   return this.http.post(this.url, product);
    // }
    //
    // remove(id: string){
    //   return this.http.delete(this.url + '/' + id);
    // }

  updateIn(caterproduct: ProductIn, id: string){
    return this.http.put(this.urlproductcharttotal + '/' + id, caterproduct);
  }
}
