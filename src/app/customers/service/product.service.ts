import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fireservices:AngularFirestore) { }

  get_AllItems(){
    return this.fireservices.collection('product').snapshotChanges();
  }
}
