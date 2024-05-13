import { Injectable } from '@angular/core';
import { BaseHttpService } from '../common/services/base-http.service';
import { MakeOrderRequest, Order, OrderState } from './order.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends BaseHttpService {
  makeOrder(order: MakeOrderRequest) {
    return this.httpClient.post(this.backendApi + 'orders', order);
  }

  getOrders(email: string):Observable<OrderState[]> {
    return this.httpClient
      .get<Order[]>(this.backendApi + 'orders', {
        params: { email },
      })
      .pipe(
        map((orders) => {
          return this.getTotalFromOrder(orders);
        })
      );
  }

  private getTotalFromOrder(orders: Order[]) {
    return orders.map((order) => {
      const total = order.products.reduce((prev, curr) => {
        prev += curr.quantity * curr.price;
        return prev;
      }, 0);
      return { ...order, total };
    });
  }
}
