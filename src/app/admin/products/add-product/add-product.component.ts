import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../service/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  sku:string;
  name:string;
  price:number;
  category:string;
  description:string;
  message:string;
  

  constructor(public productservice:ProductService) { }

  ngOnInit(): void {
  }

  addRecord(){
    let Record = {};
    Record['sku'] = this.sku;
    Record['name'] = this.name;
    Record['price'] = this.price;
    Record['category'] = this.category;
    Record['description'] = this.description;

    this.productservice.add_record(Record).then(res => {
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

}
