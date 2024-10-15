import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private readonly firestore: AngularFirestore) {}

  async emailExists(email: string): Promise<boolean> {
    try {
      const snapshot = await this.firestore
        .collection('users', (ref) => ref.where('Email', '==', email))
        .get()
        .toPromise();
      return snapshot ? !snapshot.empty : false;
    } catch (error) {
      console.error('Error this email already exists:', error);
      return false;
    }
  }

  addUser(userData: any) {
    return this.firestore.collection('users').add(userData);
  }

 addTask(nuevaTarea: any) {
    
    return this.firestore.collection('tareas').add(nuevaTarea);
  }

}
