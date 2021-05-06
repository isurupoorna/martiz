import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public fireservices:AngularFirestore) { }

  add_record(Record){
    return this.fireservices.collection('product').add(Record);
  }

  get_allProduct(){
    return this.fireservices.collection('product').snapshotChanges();
  }

  get_singleProduct(){
    return this.fireservices.collection('product').snapshotChanges();
  }

  create_NewItem(Record){
    return this.fireservices.collection('product').add(Record);
  }

  get_AllItems(){
    return this.fireservices.collection('product').snapshotChanges();
  }

  update_items(id,record){
    this.fireservices.doc('product/' + id).update(record);
  }




}
