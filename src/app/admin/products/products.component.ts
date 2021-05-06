import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

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

  isedit:boolean = false;

  constructor(public productservice:ProductService , 
              private router: Router,
              private rought: ActivatedRoute) { }

  ngOnInit(): void {
    this.productservice.get_allProduct().subscribe(data =>{
      this.product = data.map(e => {
        return {
          id: e.payload.doc.id,
          sku: e.payload.doc.data()['sku'],
          Productname: e.payload.doc.data()['name'],
          price: e.payload.doc.data()['price'],
        };

      })
      console.log(this.product);
    })
  }

  createItem(){
    let Record = {};
    Record['sku'] = this.sku;
    Record['name'] = this.name;
    Record['price'] = this.price;
    Record['category'] = this.category;
    Record['description'] = this.description;

    this.productservice.create_NewItem(Record).then(res => {
      this.sku = "";
      this.name = "";
      this.price = undefined;
      this.category = "";
      this.description = "";
      console.log(res);
      this.message = "Product Added";

    }).catch(error => {
      console.log(error);
    })
  }

  EditItem(Record)
  {
    console.log(Record.sku);
    this.isedit = true; 
    this.id = Record.id;
    this.sku = Record.sku;
    this.name = Record.name;
    this.price = Record.price;

    console.log(this.id);
    console.log(this.price);
    // Record.editSku = Record.sku;
    // Record.editprice = Record.price;
    // Record.editcategory = Record.category;
    // Record.editdescription = Record.description;

  }

  cancel()
  {
    this.isedit = false;
    this.sku = "";
    this.name = "";
    this.price = null;
  }

  updateRecord(){
    let record = {};
    record['sku'] = this.sku;
    console.log(this.sku);
    this.productservice.update_items(this.id,record);
    this.isedit =false;
    this.sku = "";
    this.name = "";
    this.price = null;
  }

}
