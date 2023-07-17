import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutresultPageRoutingModule } from './aboutresult-routing.module';

import { AboutresultPage } from './aboutresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutresultPageRoutingModule
  ],
  declarations: [AboutresultPage]
})
export class AboutresultPageModule {}
