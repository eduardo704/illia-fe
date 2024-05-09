import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'orders',
    component: OrdersComponent,
    title: 'Home page',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Home page',
  },
];
