import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fireservices:AngularFirestore) { }


  add_cart(data){
    return this.fireservices.collection('cart').add(data);
  }


  get_cartItems(){
    return this.fireservices.collection('cart').snapshotChanges();
  }

}
