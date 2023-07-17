import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aboutresult',
  templateUrl: './aboutresult.page.html',
  styleUrls: ['./aboutresult.page.scss'],
})
export class AboutresultPage implements OnInit {
  x: any;
  y:any;
  tmpparam: any;
  constructor(public ar: ActivatedRoute) { this. tmpparam}

  ngOnInit() {
    // this.x = this.ar.snapshot.paramMap.get('uname');
    // this.y = this.ar.snapshot.paramMap.get('upwd');

    this. tmpparam = this.ar.snapshot.paramMap.get('dataobj');
    let getobj =JSON.parse(this.tmpparam);
    this. x = getobj["getname"];
    this. y = getobj["getpwd"];
    console.log("x=",this.x);
    console.log(getobj);
  }

}
