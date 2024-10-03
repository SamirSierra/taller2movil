import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const Components = [InputComponent];
const Modules = [CommonModule, IonicModule, FormsModule];

@NgModule({
  declarations: [...Components],
  imports: [...Modules],
  exports: [...Components, ...Modules]
})
export class SharedModule {}
