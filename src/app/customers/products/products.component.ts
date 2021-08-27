import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../service/product.service";
import { AuthService } from "../service/auth.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:any;
  id: string;
  sku:string;
  name:string;
  Productname:string;
  price:number;
  category:string;
  description:string;
  message:string;
  tagName:string;
  image:string;

  islogin:boolean;

  constructor(private router: Router,public productservice:ProductService,private authservise:AuthService) { }

  ngOnInit(): void {
    this.productservice.get_AllItems().subscribe(data =>{
      this.product = data.map(e => {
        return {
          id: e.payload.doc.id,
          sku: e.payload.doc.data()['sku'],
          Productname: e.payload.doc.data()['title'],
          price: e.payload.doc.data()['price'],
          category : e.payload.doc.data()['category'],
          description : e.payload.doc.data()['description'],
          image: e.payload.doc.data()['image'],
        };

      })
      console.log(this.product);

      for(var i = 0; i<this.product.length; i++){
        console.log(i);
      }

    })

    this.islogin = this.authservise.isLoggedIn;
    //console.log('yes' + this.islogin);
  }

  selectProduct(id){ 
    this.router.navigate(['/productdetails',id]).then();
  }

}


