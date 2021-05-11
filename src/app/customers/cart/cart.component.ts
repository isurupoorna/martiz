import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { AuthService } from "../service/auth.service";
import { CartService } from "../service/cart.service";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  logedUser: string;
  id: string;
  cart: any;
  name: string;
  qnt: number;
  tot: number;



  constructor(private authservise: AuthService, private fireservices: AngularFirestore, private cartservice: CartService) { }

  ngOnInit(): void {

    this.logedUser = localStorage.getItem('userId');
    console.log(this.logedUser);

    //  this.cart = this.fireservices.collection("cart", ref => ref.where('userId', '==', this.logedUser)).snapshotChanges();
    //  console.log(this.cart.data()['name']);

    this.cartservice.get_cartItems().subscribe(data => {
      this.cart = data.map(e => {
        return {
          id: e.payload.doc.id,
          //sku: e.payload.doc.data()['sku'],
          name: e.payload.doc.data()['name'],
          qnt: e.payload.doc.data()['qnt'],
          tot: e.payload.doc.data()['tot'],
        };

      })
      console.log(this.cart);
    })

    //this.invokeStripe();


  }

  checkout(amount:any){
    // const paymentHandler = (<any>window).StripeCheckout.configure({
    //   key: 'pk_test_51IpchrBpXVFaHkwCSr2x9dBZ28hHFBTGF4VoeYpqc0vc6z6nWlJWF7HcajxOILDiPC3PEwgx013QMUhJqkjJvH7j00Ni7iTKOo',
    //   locale: 'auto',
    //   token: function(stripeToken: any){
    //     console.log(stripeToken.card);
    //     alert('done');
    //   }
    // });

    // paymentHandler.open({
    //   name: 'martiz',
    //   description: '3 products',
    //   amount: amount,
    // })
  }

  // invokeStripe(){
  //   if(!window.document.getElementById("stripe-script")){
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-stripe';
  //     script.type = 'text/javascript';
  //     script.src = "";
  //     window.document.body.appendChild(script);
  //   }
  // }

}
