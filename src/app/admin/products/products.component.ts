import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import { finalize } from 'rxjs/operators';
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
  url:string;

  isedit:boolean = false;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  profileUrl: Observable<string | null>;

  constructor(public productservice:ProductService , 
              private router: Router,
              private rought: ActivatedRoute,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.productservice.get_allProduct().subscribe(data =>{
      this.product = data.map(e => {
        return {
          id: e.payload.doc.id,
          sku: e.payload.doc.data()['sku'], 
          Productname: e.payload.doc.data()['name'],
          price: e.payload.doc.data()['price'],
          category : e.payload.doc.data()['category'],
          description : e.payload.doc.data()['description'],
          url: e.payload.doc.data()['url']
        };

      })
      console.log(this.product);
    })
  }

  createItem(){
    console.log(this.url);

    let tags = [];
    this.tagName = this.name;

    for (let index = 0; index < this.tagName.length; index++) {
      var splitted = this.tagName.substr(0, index+1);
      tags[index] = splitted;
    }

    console.log(tags);
 
    let Record = {};
    Record['sku'] = this.sku;
    Record['name'] = this.name;
    Record['price'] = this.price;
    Record['category'] = this.category;
    Record['description'] = this.description;
    Record['tags'] = tags;
    Record['url'] = this.url;


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
    console.log(Record.category);
    this.isedit = true; 
    this.id = Record.id;
    this.sku = Record.sku;
    this.Productname = Record.Productname;
    this.price = Record.price;
    this.category = Record.category;
    this.description = Record.description;

    console.log(this.id);
    console.log(this.price);
    console.log(this.Productname);
    console.log(this.category);

  }

  cancel()
  {
    this.isedit = false;
    this.clearData();
  }

  updateRecord(){
    let record = {};
    record['sku'] = this.sku;
    record['name'] = this.Productname;
    record['price'] = this.price;
    record['category'] = this.category;
    record['description'] = this.description;
    this.productservice.update_items(this.id,record);
    this.isedit =false;
    this.clearData();
  }

  clearData(){
    this.sku = "";
    this.name = "";
    this.price = null;
    this.category = "";
    this.description = "";
  }

  deleteProduct(product_id){
    this.productservice.deleteProduct(product_id);
  }

  chooseFile(event){
    const file = event.target.files[0];
    const filePath = 'ona ekak';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((downloadURL) => {
          
          
          this.url = downloadURL;
          console.log(this.url);
          //fileUpload.name = fileUpload.file.name;
         // this.saveFileData(fileUpload);
        });
      })
    ).subscribe();
    
  }

}
