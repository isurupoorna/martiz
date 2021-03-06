import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(public fireservices:AngularFirestore) { }

  get_allProduct(){
    return this.fireservices.collection('orders').snapshotChanges();
  }

  update_order(id,record){
    this.fireservices.doc('orders/' + id).update(record);
  }

}

