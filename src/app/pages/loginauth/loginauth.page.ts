import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-loginauth',
  templateUrl: './loginauth.page.html',
  styleUrls: ['./loginauth.page.scss'],
})
export class LoginauthPage implements OnInit {
  //credentials: FormGroup;
  email2:any;
  pwd2:any;
 


  constructor(private loadingController: LoadingController,
    private authSV: AuthService,
    private router: Router,
    private alertController: AlertController,) { }


  ngOnInit() {
  }
  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
    
    const user = await this.authSV.register(this.email2,this.pwd2);
    await loading.dismiss();
    
    if (user) {
    this.router.navigateByUrl('/homedb', { replaceUrl: true });
    } else {
    this.showAlert('Registration failed', 'Please try again!');
    }
    }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
   
    const user = await this.authSV.login(this.email2,this.pwd2);
    await loading.dismiss();
   
    if (user)
      this.router.navigateByUrl('/homedb', { replaceUrl: true });
    else
      this.showAlert('Login failed', 'Please try again!');


   
}


async showAlert(header:string, message:string) {
    const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK']
});
await alert.present();
 


}
}