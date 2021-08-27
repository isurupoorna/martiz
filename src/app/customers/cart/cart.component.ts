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
  id: string = '';
  cart: any;
  pname: string;
  qnt: number;
  tot: number = 0 ;
  subTotal:number = 0;

  image: string;
  priceList: Array<number> = [];

  handler: any = null;

  products:any;
 

  //aaa: Array<any> = [4283216596, this.id, this.qnt, 0];
  mycart: object = {};

  public now: Date = new Date();

  constructor(private authservise: AuthService, private fireservices: AngularFirestore, private cartservice: CartService) { }

  ngOnInit(): void {

    this.logedUser = localStorage.getItem('userId');
    //console.log(this.logedUser);

    //  this.cart = this.fireservices.collection("cart", ref => ref.where('userId', '==', this.logedUser)).snapshotChanges();
    //  console.log(this.cart.data()['name']);

    if (this.logedUser) {
      this.cartservice.get_cartItems().subscribe(data => {
        this.cart = data.map(e => {
          return {
            id: e.payload.doc.id,
            //sku: e.payload.doc.data()['sku'],
            pname: e.payload.doc.data()['name'],
            qnt: e.payload.doc.data()['qnt'],
            tot: e.payload.doc.data()['tot'],
            image: e.payload.doc.data()['image']
          };
          

        })
        //console.log(this.cart);
        console.log(this.cart);
        
       // this.subTotal.push(this.cart['tot']);
        for (var i = 0; i < this.cart.length; i++) {
          //console.log(this.cart[i].tot);
          this.priceList.push(this.cart[i].tot);
          this.subTotal = this.priceList[i]+this.subTotal;
          console.log(this.priceList);
        }
        //console.log(this.subTotal);

      })


    } else {

    }
        this.getTot();
        this.loadStripe();

    this.products = {
      color: 4283216596,
      id: this.id,
      qnt: 2,
      singlePrice: 0,
    };

  }

  payNow() {
    if (this.cart.length > 0) {
      this.checkout(this.subTotal);
    } else {
      alert("select products");
    }

    //
  }

  checkout(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IpchrBpXVFaHkwCSr2x9dBZ28hHFBTGF4VoeYpqc0vc6z6nWlJWF7HcajxOILDiPC3PEwgx013QMUhJqkjJvH7j00Ni7iTKOo',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);

        alert('Token Created!!');
        if (token) {
          this.cart = null;
        }

      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: this.tot,
    });

    var i = this.createItem();

  }

  getTot() {
    console.log(this.priceList);
    this.priceList.forEach(element => {
      console.log(element[1]);
    });
    // for(var i = 0; i < 2; i++){
    //   console.log(this.priceList[i]);
    //   this.subTotal = this.subTotal + this.priceList[i];
    // }
    // console.log(this.subTotal);
  }

  deleteProduct(id) {
    this.cartservice.deleteProduct(id);
    //alert(id);
  }

  createItem() {
    console.log(this.pname);
    let Record = {};
    Record['orderTime'] = this.now;
    Record['coustemerId'] = this.logedUser;
    Record['']
    //Record['name'] = this.pname;
    //Record['quentity'] = this.qnt;
    Record['totalPrice'] = this.subTotal;
    Record['products'] = this.cart;
    console.log(Record);

    this.cartservice.create_order(Record).then(res => {
      return true;

    }).catch(error => {
      console.log(error);
    })
  }




  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51IqAjRCXb3URDkrxXy3T8raJ6RqT8BD3xJVzCpbd54ghfScHsDlWG8Nz2XvVy5nG6CDkeYhkk2zwRUALe4XNqyaD00YhLyzHWd',
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
