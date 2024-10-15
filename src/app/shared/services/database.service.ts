import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/UserInformation';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly firestore: Firestore) {}

}
