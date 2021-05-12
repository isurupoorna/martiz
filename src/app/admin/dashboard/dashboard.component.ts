import { Component, OnInit } from '@angular/core';
import { OrderService } from "../service/order.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  order:any;
  id:string;
  orderNo: number;
  customerNo: number;
  product: string;
  qnt: number;
  amount: number;
  status: string;

  isEdit: boolean = false;

  constructor(public orderservise:OrderService) { }

  ngOnInit(): void {
    this.orderservise.get_allProduct().subscribe(data =>{
      this.order = data.map(e => {
        return {
          id: e.payload.doc.id,
          orderNo: e.payload.doc.id,
          customerNo: e.payload.doc.data()['coustemerId'],
          product: e.payload.doc.data()['products.qnt'],
          amount: e.payload.doc.data()['totalPrice'],
          qnt: e.payload.doc.data()['quentity'],
          status: e.payload.doc.data()['staus'],
        };

      })
      console.log(this.order);
    })
  }

 

}
