import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/UserInformation';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly firestore: Firestore) {}

  async getUserById(id: string): Promise<User | undefined> {
    try {
      const userDocRef = doc(this.firestore, `users/${id}`);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as User;
        return {
          Id_User: docSnap.id,
          UserName: data.UserName || '',
          LastName: data.LastName || '',
          Email: data.Email || '',
          Phone: data.Phone || '',
          Age: data.Age || 0,
          image: data.image || '',
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
