import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Product {

  id: string;
  item_name: string;
  item_desc: string;
  item_count: string;
  item_in: string;
  item_out: string;
  date_added: string;
  totals: string;
  totalin: string;
  status: string;


}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost/clientpresent/api/products';
  private urlproductchart = 'http://localhost/clientpresent/api/prodchart';
  private urlproductcharttotal = 'http://localhost/clientpresent/api/prodcharttotal';
  private urlproductcharttotalin = 'http://localhost/clientpresent/api/prodcharttotalin';
  private urlapicaterout = 'http://localhost/clientpresent/api/apicaterout';
  constructor(
    private http: HttpClient
  ) { }

//product simple crud

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

  // prodcut chart

  getAllChart(){
    return this.http.get<[Product]>(this.urlproductchart);
  }

  // total of itemcount pass into chart

  getAllChartTotal(){
    return this.http.get<[Product]>(this.urlproductcharttotal);
  }

  // get total in from caterprod Injectable

  getAllprodIn(){
    return this.http.get<[Product]>(this.urlproductcharttotalin);
  }




  updateIn(product: Product, id: string){
    return this.http.put(this.urlproductchart + '/' + id, product);
  }

  updateOut(product: Product, id: string){
    return this.http.put(this.urlapicaterout+ '/' + id, product);
  }

}
