import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareasPageRoutingModule } from './tareas-routing.module';

import { TareasPage } from './tareas.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TareasPageRoutingModule
  ],
  declarations: [TareasPage]
})
export class TareasPageModule {}
