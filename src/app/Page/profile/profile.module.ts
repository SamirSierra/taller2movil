import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { DataService } from 'src/app/shared/services/database.service';

@NgModule({
  imports:  [ProfilePageRoutingModule, SharedModule
  ],
  declarations: [ProfilePage],
  providers: [DataService],
})
export class ProfilePageModule {}
