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

  handler:any = null;

  constructor(private authservise: AuthService, private fireservices: AngularFirestore, private cartservice: CartService) { }

  ngOnInit(): void {

    this.logedUser = localStorage.getItem('userId');
    console.log(this.logedUser);

    //  this.cart = this.fireservices.collection("cart", ref => ref.where('userId', '==', this.logedUser)).snapshotChanges();
    //  console.log(this.cart.data()['name']);

    if(this.logedUser){
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
    }



    //this.invokeStripe();
    this.loadStripe();

  }

  checkout(amount:any){
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IpchrBpXVFaHkwCSr2x9dBZ28hHFBTGF4VoeYpqc0vc6z6nWlJWF7HcajxOILDiPC3PEwgx013QMUhJqkjJvH7j00Ni7iTKOo',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

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

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

}
