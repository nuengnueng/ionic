import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
})
export class HomePage implements OnInit {
  productlist: any;   // define product list 
  public alertButtons = ['OK'];
  constructor(private alertCtrl: AlertController) {
    this.productlist = [
      {id: 1,
       productname: "Perfume",
       price: "1055",
       //icon2: "nutrition",
       icon: "https://img.icons8.com/color/48/perfume-bottle.png",
      },
      {id: 2,
        productname: "Face-Powder",
        price: "355",
       icon: "https://img.icons8.com/color/48/face-powder.png"
      },
      {id: 3,
        productname: "Nail Polish",
        price: "125",
       icon: "https://img.icons8.com/color/48/eye-shadows.png"
      }
    ];
  }


  


  ngOnInit() {
  }

  async showedit(item:any) {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      subHeader: 'คุณต้องการแก้ไขข้อมูลหรือไม่',
      inputs: [
        {
          name: 'inpname',
          placeholder: 'product name',
          value: item.productname
        },
        {
          name: 'inprice',
          placeholder: 'price',
          type: 'password',
          value: item.price
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            for(let i=0; i<this.productlist.lenght;i++){
              if(this.productlist[i] == item){
                this.productlist[i].productname = data.inpname;
                this.productlist[i].price = data.inprice;
              }
            }
           
          }
        }
      ]
    });
    (await alert).present();
  }
}
