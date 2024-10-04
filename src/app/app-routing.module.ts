import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./Page/home/home.module').then((m) => m.HomePageModule),
  },
  {
<<<<<<< HEAD
    path: 'login',
    loadChildren: () => import('./Page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
=======
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
>>>>>>> 11a862137108d42638dcbf43ef9b909f1c0402cb
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule], 
})
export class AppRoutingModule {}
