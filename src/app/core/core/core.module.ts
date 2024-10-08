import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CREDENTIALS),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class CoreModule { }
