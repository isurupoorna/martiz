import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';


import { ProductService } from "./service/product.service";
import { EditProductComponent } from './products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AdminComponent,
     AuthComponent, 
     DashboardComponent, 
     HeaderComponent, 
     ProductsComponent, 
     AddProductComponent, 
     OrdersComponent, 
     UsersComponent, 
     EditProductComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    CommonModule,
  ],
  providers: [ProductService]
})
export class AdminModule { }
