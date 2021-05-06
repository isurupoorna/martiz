import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  product:any;
  id:string;
  sku:string;
  Productname:string;
  price:number;
  category:string;
  description:string;
  message:string;

  constructor(public productservice:ProductService, private route : ActivatedRoute) { }

  ngOnInit() {
    console.log('came');
    
      this.id = this.route.snapshot.params['id'] 
      console.log(this.id);
      
  }

}
