import { getAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MakeOrderRequest, Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  makeOrder(order: MakeOrderRequest) {
    return this.httpClient.post('http://localhost:8080/api/orders', order);
  }

  getOrders(email: string) {
    return this.httpClient.get<Order[]>('http://localhost:8080/api/orders', { params: {email} });
  }
}
