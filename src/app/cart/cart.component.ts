import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';
import { CartProduct, CartState } from '../state/cart/cart.state';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { faker } from '@faker-js/faker';
import { MatIconModule } from '@angular/material/icon';
import { CartActions } from '../state/cart/cart.actions';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  fakeAdress = '';

  @Select(CartState.getTotalValue)
  totalQuantityOfItems$: Observable<number>;

  @Select(CartState.getAllProductsInCart) product$: Observable<CartProduct[]>;

  constructor(private store: Store) {
    this.fakeAdress = `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}`;
    console.log(this.fakeAdress);
  }

  addToCart(product: Product) {
    this.store.dispatch(new CartActions.AddToCart(product));
  }
  removeFromCart(productId: number) {
    this.store.dispatch(new CartActions.RemoveFromCart({ id: productId }));
  }

  trackById(index:number, item: CartProduct) {
    return item.id;
  }
}
