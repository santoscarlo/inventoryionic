import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Product {
  id: string;
  item_name: string;
  item_desc: string;
  item_count: string;


}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost/clientpresent/api/products';
  constructor(
    private http: HttpClient
  ) { }


  getAll(){
    return this.http.get<[Product]>(this.url);
  }

  get(id: string){
    return this.http.get<[Product]>(this.url + '/' + id);
  }

  create(product: Product){
    return this.http.post(this.url, product);
  }

  update(product: Product, id: string){
    return this.http.put(this.url + '/' + id, product);
  }

  remove(id: string){
    return this.http.delete(this.url + '/' + id);
  }
}
