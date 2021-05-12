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
  product: any;
  qnt: number;
  amount: number;
  status: string;
  title:string;
 a:any;
  isEdit: boolean = false;

  constructor(public orderservise:OrderService) { }

  ngOnInit(): void {
    this.orderservise.get_allProduct().subscribe(data =>{
      this.order = data.map(e => {
        return {
          id: e.payload.doc.id,
          orderNo: e.payload.doc.data()['orderNo'],
         // title: e.payload.doc.data()['products.id'],
          customerNo: e.payload.doc.data()['coustemerId'],
          product: e.payload.doc.data()['products'],
          amount: e.payload.doc.data()['totalPrice'],
          qnt: e.payload.doc.data()['quentity'],
          status: e.payload.doc.data()['staus'],
         // title : this.product['id']

        };

      })
      console.log(this.order);
    })
  }

  editOrder(Record){
    this.isEdit = true;
      console.log(Record.sku);
      this.id = Record.id;
      this.orderNo = Record.orderNo;
      this.customerNo = Record.customerNo;
      this.product = Record.product;
      this.qnt = Record.qnt;
      this.amount = Record.amount;
      this.status = Record.status;
  
  
      console.log(this.id);
      console.log(this.amount);
      // Record.editSku = Record.sku;
      // Record.editprice = Record.price;
      // Record.editcategory = Record.category;
      // Record.editdescription = Record.description;
    
  }

  cancel(){
    this.isEdit = false;
  }

  updateOrder(){
    let record = {};
    record['amount'] = this.amount;
    this.orderservise.update_order(this.id,record);
    this.isEdit = false;
    this.clearData();
  }

  clearData(){
    this.orderNo = null;
    this.customerNo = null;
    this.product = "";
    this.qnt = null;
    this.amount = null;
    this.status = "";
  }
  

}
