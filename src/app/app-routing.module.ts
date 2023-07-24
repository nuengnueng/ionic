import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module')
      .then( m => m.AboutPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module')
      .then( m => m.SettingPageModule)
  },
  {
    path: 'aboutresult/:dataobj',
    loadChildren: () => import('./pages/aboutresult/aboutresult.module').then( m => m.AboutresultPageModule)
  },
  {
    path: 'homedb',
    loadChildren: () => import('./pages/homedb/homedb.module').then( m => m.HomedbPageModule)
  },
  {
    path: 'loginauth',
    loadChildren: () => import('./pages/loginauth/loginauth.module').then( m => m.LoginauthPageModule)
  },
  
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}