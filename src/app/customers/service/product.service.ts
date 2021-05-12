import { Injectable } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { AngularFirestore } from "@angular/fire/firestore";
import { asapScheduler } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fireservices:AngularFirestore) { }

  get_AllItems(){
    return this.fireservices.collection('product').snapshotChanges();
  }

  get_latest(){
    return this.fireservices.collection('product').ref.limit(5);
  }

  get_singleProduct(id){
    return this.fireservices.collection('product').doc(id).ref.get().then((doc) => {
      var i = doc.data();
      
    }
    )
  }

}
