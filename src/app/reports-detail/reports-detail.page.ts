import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-detail',
  templateUrl: './reports-detail.page.html',
  styleUrls: ['./reports-detail.page.scss'],
})
export class ReportsDetailPage implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }


async  closeModalReportsDetail(){
    this.toastController.create({
      message: 'Synchronizing please wait..',
      duration: 3000
    }).then((toast) =>{
 toast.present();
    })
    this.loadingController.create({
      duration: 3000
    }).then((res) =>{

      res.present()
      res.onDidDismiss()

      this.router.navigate(['./reports'])
      this.modalCtrl.dismiss()

    })

  }

}
