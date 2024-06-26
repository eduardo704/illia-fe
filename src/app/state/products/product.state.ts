import { ProductService } from './../../products/product.service';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from '../../products/product.model';
import { ProductActions } from './product.actions';
import { tap } from 'rxjs';

export interface ProductsStateModel {
  products: Product[];
}

@State<Product[]>({
  name: 'products',
  defaults: []
})
@Injectable()
export class ProductsState {
  constructor(private productService:ProductService){}

  @Selector()
  static getProductsState(state: ProductsStateModel) {
    return state;
  }


  @Action(ProductActions.FetchAll, { cancelUncompleted: true })
  getProducts(ctx: StateContext<Product[]>) {
    return this.productService.getProducts().pipe(
      tap(products => {
        ctx.setState(products);
      })
    );
  }
}
