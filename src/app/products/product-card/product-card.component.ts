import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from '../../shared/components/display/rating/rating.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Select, Store } from '@ngxs/store';
import { CartActions } from '../../state/cart/cart.actions';
import { Observable } from 'rxjs';
import { CartState } from '../../state/cart/cart.state';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RatingComponent, CommonModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product;

  quantity$: Observable<number>;

  // @Select(CartState.getQuantityById) product$: Observable<number>;
  // @Select(CartState.getCartById(this.product.id)) nums$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.quantity$ = this.store.select(CartState.getCartById(this.product.id));
  }

  addToCart(product: Product) {
    this.store.dispatch(new CartActions.AddToCart(product));
  }
  removeFromCart(productId: number) {
    this.store.dispatch(new CartActions.RemoveFromCart({ id: productId }));
  }
}
