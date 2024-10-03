import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { InputComponent } from 'src/app/shared/components/input/input.component';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
   SharedModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
