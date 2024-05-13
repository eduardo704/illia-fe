import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { NgxsModule, Store } from '@ngxs/store';
import { StateReset } from 'ngxs-reset-plugin';
import { productCart } from '../mocks/products.mock';
import { OrdersService } from '../orders/orders.service';
import { CartState } from '../state/cart/cart.state';
import { ProductsState } from '../state/products/product.state';
import { CartComponent } from './cart.component';
import { order } from '../mocks/orders.mock';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store;
  let ordersService: OrdersService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CartComponent,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgxsModule.forRoot([ProductsState, CartState]),
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: OrdersService, useValue: { makeOrder: jest.fn() } },
      ],
    }).compileComponents();
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    ordersService = TestBed.inject(OrdersService);
    store.reset({
      ...store.snapshot(),
      cart: {
        products: {
          '1': { ...productCart },
        },
      },
    });

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('placeOrder', () => {
    it('should work', fakeAsync(() => {
      component.userForm.setValue({ email: 'edu@email.com', name: 'edu' });

      const spy = jest.spyOn(ordersService, 'makeOrder').mockReturnValue(of(order));
      const storeSpy = jest.spyOn(store, 'dispatch');
      const routerSpy = jest.spyOn(router, 'navigate');
      component.placeOrder();
      expect(spy).toHaveBeenCalledWith({
        products: [productCart],
        user: { email: 'edu@email.com', name: 'edu' },
      });
      tick();
      expect(storeSpy).toHaveBeenCalledWith(new StateReset(CartState));
      expect(routerSpy).toHaveBeenCalledWith(['orders'], {
        queryParams: { email: 'edu@email.com' },
      });
    }));
  });
});
