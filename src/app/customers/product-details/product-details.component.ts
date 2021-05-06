import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goFire(){}

  relatedProduct = [
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
    }

  ]
}
