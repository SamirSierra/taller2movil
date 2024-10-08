import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthService } from './services/auth/auth.service';
import { FootComponent } from './components/foot/foot.component';

const Components = [InputComponent, AvatarComponent, ButtonComponent, FootComponent];
const Modules = [CommonModule, IonicModule, FormsModule];

@NgModule({
  declarations: [...Components],
  imports: [...Modules],
  exports: [...Components, ...Modules],
  providers: [AuthService],
})
export class SharedModule {}
