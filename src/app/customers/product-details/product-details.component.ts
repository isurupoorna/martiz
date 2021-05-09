import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../service/product.service";


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


  constructor(private _Activatedroute: ActivatedRoute,
    public productservice: ProductService,
    private fireservices:AngularFirestore
  ) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);

    var data = this.fireservices.collection('product').doc(this.id).ref.get().then((doc) => {
      this.name  = doc.data()['name'],
      this.price = doc.data()['price'],
      this.description = doc.data()['description'],
      this.category = doc.data()['category'],
      this.url = doc.data()['url']
      console.log(this.name+this.price);
    })

    // this.product = this.productservice.get_singleProduct(this.id);
    // console.log(this.product);

    



  }

  goFire() { }






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
