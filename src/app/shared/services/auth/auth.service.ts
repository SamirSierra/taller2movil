import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly angularFire: AngularFireAuth) {}

  public async register(email: string, Password: string) {
    return new Promise((resolve, reject) => {
      this.angularFire.createUserWithEmailAndPassword(email, Password)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  public async login(email: string, Password: string) {
    return new Promise((resolve, reject) => {
      this.angularFire.signInWithEmailAndPassword(email, Password)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
    })
  }

  public async logout() {
    return await this.angularFire.signOut();

  }

  public async isAuth() {
    

    return new Promise((resolve, reject) =>{
      this.angularFire.onAuthStateChanged((user) => {
        if(user) {          
          resolve(true);
        }else {
          resolve(false);
        }
      }, exception  => {
        console.error('Error en la autenticación:', exception);
        reject(exception);
       });
    });
  }
}
