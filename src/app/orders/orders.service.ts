import { Injectable } from '@angular/core';
import { BaseHttpService } from '../common/services/base-http.service';
import { MakeOrderRequest, Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends BaseHttpService {
  makeOrder(order: MakeOrderRequest) {
    return this.httpClient.post(this.backendApi + 'orders', order);
  }

  getOrders(email: string) {
    return this.httpClient.get<Order[]>(this.backendApi + 'orders', {
      params: { email },
    });
  }
}
