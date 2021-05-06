import { Component, OnInit } from '@angular/core';
import { OrderService } from "../service/order.service";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order:any;
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

  editOrder(){
    this.isEdit = true;
  }

  cancel(){
    this.isEdit = false;
  }

  updateOrder(){
    
  }
  

}
