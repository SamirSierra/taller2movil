import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { DataService } from 'src/app/shared/services/database.service';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  uid: string = '';

  constructor(
    private readonly authService: AuthService,
    private readonly firebaseService:FirebaseService
  ) {}

  async ngOnInit() {
    this.getUid();
  }

  async getUid() {
    this.uid = (await this.authService.getUserID()) || '';
    console.log('uid->', this.uid);
  }
}
