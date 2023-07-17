import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  username:any;
  password:any;
  
  constructor(public navCtrl: NavController,
    public router: Router) { } 
  ngOnInit() {
  }
  gotonext(){
    // this.router.navigate(['aboutresult',this.username ,this.password]);
    let dataobj={

      getname:this.username,
      getpwd:this.password
    };
    let datastr = JSON.stringify(dataobj);
    this.router.navigate(['aboutresult',datastr]);
  }
}
