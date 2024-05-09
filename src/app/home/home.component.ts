import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { Product } from '../products/product.model';
import { ProductActions } from '../state/products/product.actions';
import { ProductsState } from '../state/products/product.state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @Select(ProductsState) product$: Observable<Product[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new ProductActions.FetchAll());
  }
}
