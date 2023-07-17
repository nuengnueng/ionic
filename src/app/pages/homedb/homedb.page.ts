import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerData, HomeCrudService } from './homeCrudService';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.page.html',
  styleUrls: ['./homedb.page.scss'],
})
export class HomedbPage implements OnInit {
  datalist: CustomerData[]=[];
  handlerMessage = '';
  roleMessage = '';
  
  constructor(private dataService: HomeCrudService,
    private modalCtrl: ModalController,
    private cd: ChangeDetectorRef,
    private alertCtrl:AlertController,
    ) {
      this.dataService.loadAllData().subscribe(res => {
       this.datalist = res;
       this.cd.detectChanges();
    });
    } 

  ngOnInit() {
  }
  
  async listdit() {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      subHeader: 'คุณต้องการแก้ไขข้อมูลหรือไม่',
      inputs: [
        {
          name: 'inpname',
          placeholder: 'name',
        },
        {
          name: 'inpass',
          placeholder: 'password',
          type: 'password',
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
      {
        text: 'Update',

      }
      ]

    }) ;
    (await alert).present();
  }
}

