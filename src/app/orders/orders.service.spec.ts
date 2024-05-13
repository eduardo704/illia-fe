import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { order } from '../mocks/orders.mock';
import { of } from 'rxjs';
import { to2DigitNum } from '../util/math';

describe('OrdersService', () => {
  let service: OrdersService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
    });
    service = TestBed.inject(OrdersService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('get Orders should work and calculate total correctly', done => {
    const spy = jest.spyOn(http, 'get').mockReturnValue(of([order]));
    service.getOrders('edu@hotmail.com').subscribe((oders) => {
      expect(to2DigitNum(oders[0].total)).toEqual(246.26);
      done()
    });
  });
});
