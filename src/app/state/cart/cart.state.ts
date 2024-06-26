import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { Product } from '../../products/product.model';
import { CartActions } from './cart.actions';

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartStateModel {
  products: { [id: number]: CartProduct };
}

@State<CartStateModel>({
  name: 'cart',
  defaults: { products: {} },
})
@Injectable()
export class CartState {
  constructor() {}

  static getCartById(id: number) {
    return createSelector([CartState], (state: CartStateModel) => {
      return state.products[id].quantity || 0;
    });
  }

  @Selector()
  static getTotalValue(state: CartStateModel) {
    let total = 0;
    for (let key in state.products) {
      const product = state.products[key];
      total += product.quantity*product.price;
    }
    return total;
  }


  @Selector()
  static getTotalCartQuantity(state: CartStateModel) {
    let quantity = 0;
    for (let key in state.products) {
      const product = state.products[key];
      quantity += product.quantity;
    }
    return quantity;
  }

  @Selector()
  static getProductsState(state: CartStateModel) {
    return state;
  }

  @Selector()
  static getAllProductsInCart(state: CartStateModel) {
    const stateProducts = state.products;
    return Object.values(stateProducts);
  }

  @Action(CartActions.AddToCart)
  addProduct(ctx: StateContext<CartStateModel>, action: CartActions.AddToCart) {
    const state = ctx.getState();
    const productId = action.payload.id;

    const productInCart = state.products[productId];

    if (productInCart) {
      ctx.setState({
        ...state,
        products: {
          ...state.products,
          [productId]: {
            ...action.payload,
            quantity: productInCart.quantity + 1,
          },
        },
      });
    } else {
      ctx.setState({
        ...state,
        products: {
          ...state.products,
          [productId]: { ...action.payload, quantity: 1 },
        },
      });
    }
  }
  @Action(CartActions.RemoveFromCart)
  removeProduct(
    ctx: StateContext<CartStateModel>,
    action: CartActions.RemoveFromCart
  ) {
    const state = ctx.getState();
    const productId = action.payload.id;
    const productInCart = state.products[productId];

    if (productInCart) {
      if (productInCart.quantity > 1) {
        ctx.setState({
          ...state,
          products: {
            ...state.products,
            [productId]: {
              ...productInCart,
              quantity: productInCart.quantity - 1,
            },
          },
        });
      } else {
        const { [productId]: value, ...newProducts } = state.products;
        ctx.setState({ ...state, products: newProducts });
      }
    }
  }
}
