import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

  

  featured_product = [
    {
      'product_name': 'Samsung S5',
      'price': 49,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/1.jpg',
      'id': 1,
    },
    {
      'product_name': 'Sony',
      'price': 99,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/2.jpg',
      'id': 2,
    },
    {
      'product_name': 'Apple',
      'price': 99,
      'discription': 'dfdfd',
      'img': '../../../assets/img/3.jpg',
      'id': 3,
    },
    {
      'product_name': 'Samsung S4',
      'price': 78,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/4.jpg',
      'id': 4,
    }

  ]

  latest_product = [
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
    },
    {
      'product_name': 'Oppo',
      'price': 23,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/12.jpg',
      'id': 9,
    },
    {
      'product_name': 'i Pone',
      'price': 65,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/13.jpg',
      'id': 10,
    },
    {
      'product_name': 'Redmi',
      'price': 12,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/14.jpg',
      'id': 11,
    },
    {
      'product_name': 'Vivo',
      'price': 19,
      'discription': 'It is a long established fact that a reader will be distracted by...',
      'img': '../../../assets/img/w1.jpg',
      'id': 12,
    }
  ]
}
