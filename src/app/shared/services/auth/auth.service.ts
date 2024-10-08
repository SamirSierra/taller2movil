import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly angularFire: AngularFireAuth) {}

  public async register(email: string, Password: string) {
    return await this.angularFire.createUserWithEmailAndPassword(
      email,
      Password
    );
  }

  public async login(email: string, Password: string) {
    return await this.angularFire.signInWithEmailAndPassword(email, Password);
  }

  public async logout() {
    return await this.angularFire.signOut();
  }

  public async isAuth() {
    return await this.angularFire.currentUser;
  }
}
