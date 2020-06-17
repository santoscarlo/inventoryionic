import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../services/product.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    productcharts: any;
    products: any;
    productsins: any;
  constructor(
    private service: ProductService
  ) { }






  ngOnInit() {

    this.service.getAllChartTotal().subscribe(charttotal => {
        this.products = charttotal;


        // console.log(charttotal)
        //
        // let item_count = charttotal.map(charttotal => charttotal.totals)
        // console.log(item_count)
    })

    this.service.getAllprodIn().subscribe(charttotalin =>{
      this.productsins  = charttotalin;
      // console.log(charttotalin)
    })

    // this.service.getAllprodIn().subscribe(prodin =>{
    //   // this.productsin = prodin;
    //   console.log(prodin)
    // })


    this.service.getAll().subscribe(response => {
      let item_count = response.map(response => response.item_count)
      let item_name = response.map(response => response.item_name)
      // console.log(item_count)

      // var ctx = document.getElementById('canvas')


      this.productcharts = new Chart('myChart', {
        type: 'line',
        data: {
          labels: item_name,
          datasets: [
            {
              data:item_count,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
           ],
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes:[{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
        }
      })

    })
  }

}
