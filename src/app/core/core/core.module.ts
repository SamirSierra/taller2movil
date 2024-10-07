import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CREDENTIALS)
  ]
})
export class CoreModule { }
