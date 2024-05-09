import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';
import { CartProduct, CartState } from '../state/cart/cart.state';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
fakeAdress='';
 @Select(CartState.getTotalValue)
totalQuantityOfItems$: Observable<number>;

  @Select(CartState.getAllProductsInCart) product$: Observable<CartProduct[]>;
  constructor(private store: Store) {
    this.fakeAdress=`${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}`
    console.log(this.fakeAdress)
  }
}
