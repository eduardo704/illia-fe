import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxsModule } from '@ngxs/store';
import { ProductsState } from '../state/products/product.state';
import { CartState } from '../state/cart/cart.state';
import { RouterModule } from '@angular/router';
import { OrdersService } from '../orders/orders.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

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
        BrowserAnimationsModule
      ],
      providers: [{ provide: OrdersService, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
