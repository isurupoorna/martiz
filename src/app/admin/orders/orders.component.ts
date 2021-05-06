import { Component, OnInit } from '@angular/core';
import { OrderService } from "../service/order.service";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order:any;
  id:string;
  orderNo: number;
  customerNo: number;
  product: string;
  qnt: number;
  price: number;
  status: string;

  isEdit: boolean = false;

  constructor(public orderservise:OrderService) { }

  ngOnInit(): void {
    this.orderservise.get_allProduct().subscribe(data =>{
      this.order = data.map(e => {
        return {
          id: e.payload.doc.id,
          orderNo: e.payload.doc.data()['orderNo'],
          customerNo: e.payload.doc.data()['customerNo'],
          product: e.payload.doc.data()['product'],
          price: e.payload.doc.data()['amount'],
          qnt: e.payload.doc.data()['qnt'],
          ststus: e.payload.doc.data()['status'],
        };

      })
      console.log(this.order);
    })
  }

  editOrder(Record){
    this.isEdit = true;
      console.log(Record.sku);
      this.id = Record.id;
      this.orderNo = Record.sku;
      this.customerNo = Record.name;
      this.product = Record.price;
      this.qnt = Record.price;
      this.price = Record.price;
      this.status = Record.price;
  
  
  
  
      console.log(this.id);
      console.log(this.price);
      // Record.editSku = Record.sku;
      // Record.editprice = Record.price;
      // Record.editcategory = Record.category;
      // Record.editdescription = Record.description;
    
  }

  cancel(){
    this.isEdit = false;
  }

  updateOrder(){
    
  }
  

}
