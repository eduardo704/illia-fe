import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Select, Store } from '@ngxs/store';
import { StateReset } from 'ngxs-reset-plugin';
import { Observable, switchMap, take } from 'rxjs';
import { OrdersService } from '../orders/orders.service';
import { Product } from '../products/product.model';
import { CartActions } from '../state/cart/cart.actions';
import { CartProduct, CartState } from '../state/cart/cart.state';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  fakeAdress = '';
  userForm: FormGroup;

  @Select(CartState.getTotalValue)
  totalQuantityOfItems$: Observable<number>;

  @Select(CartState.getAllProductsInCart) product$: Observable<CartProduct[]>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fakeAdress = `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}`;
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  addToCart(product: Product) {
    this.store.dispatch(new CartActions.AddToCart(product));
  }

  removeFromCart(productId: number) {
    this.store.dispatch(new CartActions.RemoveFromCart({ id: productId }));
  }

  placeOrder() {
    this.product$
      .pipe(
        take(1),
        switchMap((products) => {
          return this.ordersService.makeOrder({
            products,
            user: { ...this.userForm.value },
          });
        })
      )
      .subscribe((_order) => {
        this.store.dispatch(new StateReset(CartState));
        const email = this.userForm.value.email || '';
        this.router.navigate(['orders'], {
          queryParams: { email },
        });
      });
  }

  trackById(index: number, item: CartProduct) {
    return item.id;
  }
}
