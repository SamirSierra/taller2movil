import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/UserInformation';

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
      console.error('Error checking if email exists:', error);
      return false;
    }
  }

  addUser(userData: any) {
    return this.firestore.collection('users').add(userData);
  }

  async getUserById(id: string): Promise<User | undefined> {
    try {
      const docSnap = await this.firestore
        .collection('users')
        .doc(id)
        .get()
        .toPromise();

      // Check if docSnap exists and is defined
      if (docSnap && docSnap.exists) {
        const data = docSnap.data() as User;
        return {
          Id_User: id,
          UserName: data?.UserName || '',
          LastName: data?.LastName || '',
          Email: data?.Email || '',
          Phone: data?.Phone || '',
          Age: data?.Age || 0,
          image: data?.image || '',
        };
      } else {
        console.log('No such document!');
        return undefined;
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      return undefined;
    }
  }
}
