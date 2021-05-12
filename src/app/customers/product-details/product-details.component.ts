import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../service/product.service";
import { CartService } from "../service/cart.service";
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: string;
  product:any;

  sku:string;
  name:string;
  Productname:string;
  price:number;
  category:string;
  description:string;
  message:string;
  tagName:string;
  url:string;

  qnt:number = 1;
  color:string;
  tot:number = 0;

  userId:string;

  islogin:boolean;

  prod = {};

  constructor(private _Activatedroute: ActivatedRoute,
    public productservice: ProductService,
    private fireservices:AngularFirestore,
    private cartservice:CartService,
    private authservise:AuthService
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);

    var data = this.fireservices.collection('product').doc(this.id).ref.get().then((doc) => {
      this.name  = doc.data()['title'],
      this.price = doc.data()['price'],
      this.description = doc.data()['description'],
      this.category = doc.data()['category'],
      this.url = doc.data()['image']
     // console.log(this.name+this.price);
    })

    this.islogin = this.authservise.isLoggedIn;

    // this.product = this.productservice.get_singleProduct(this.id);
    // console.log(this.product);

  }

  goFire() { 
    this.prod['id'] = this.id;
    this.prod['name'] = this.name;
    this.prod['qnt'] = this.qnt;
    this.prod['color'] = this.color;
    this.tot = this.qnt * this.price;
    this.prod['tot'] = this.tot;
    this.prod['image'] = this.url;
    this.prod['userId'] = localStorage.getItem('userId');
    
   // console.log(this.prod);
    this.addToCart(this.prod);
  }

  qntChange(event:any){
    console.log(event.target.value);
    this.qnt = event.target.value;
  }


  selectValue(event:any){
    this.color = event.target.value;
    console.log(this.color);
  }

  addToCart(recod){

    if(this.islogin){
      this.cartservice.add_cart(recod).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      })
    }else{
      alert("Login First");
    }


  }




  relatedProduct = [
    {
      'product_name': 'Redmi',
      'price': 23,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/6.jpg',
      'id': 5,
    },
    {
      'product_name': 'Note 9',
      'price': 108.99,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/9.jpg',
      'id': 6,
    },
    {
      'product_name': 'One Plus',
      'price': 12,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/10.jpg',
      'id': 7,
    },
    {
      'product_name': 'Nokia',
      'price': 78,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/11.jpg',
      'id': 8,
    }

  ]
}
