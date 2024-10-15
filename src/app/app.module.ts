import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseRouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment.prod';
import { CoreModule } from './core/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: BaseRouteReuseStrategy, useClass: IonicRouteStrategy
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
