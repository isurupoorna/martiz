import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public fireservices:AngularFirestore) { }


  get_allUsers(){
    return this.fireservices.collection('user').snapshotChanges();
  }


}
