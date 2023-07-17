import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutresultPage } from './aboutresult.page';

const routes: Routes = [
  {
    path: '',
    component: AboutresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutresultPageRoutingModule {}
