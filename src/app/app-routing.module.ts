import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './Page/home/home.page';
import { TareasPage } from './Page/tareas/tareas.page';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'home/:id',
    loadChildren: () =>
      import('./Page/home/home.module').then((m) => m.HomePageModule),
      canActivate: [authGuard]
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./Page/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./Page/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  { path: 'tareas', loadChildren: () => 
    import('./Page/tareas/tareas.module').then(m => m.TareasPageModule) },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'nueva-tarea', component: TareasPage }, 
  
  {
    path: 'tareas',
    loadChildren: () => import('./Page/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule], 
})
export class AppRoutingModule {}
