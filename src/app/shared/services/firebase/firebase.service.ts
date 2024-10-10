import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private readonly firestore: AngularFirestore) {}

  addUser(userData: any) {
    return this.firestore.collection('users').add(userData);
  }
}
