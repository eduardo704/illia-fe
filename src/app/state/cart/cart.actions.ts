import { Product } from "../../products/product.model";

export namespace CartActions {
  export class AddToCart {
    static readonly type = '[Cart] Add to Cart ';
    constructor(public payload: Product) {}
  }
  export class ClearCart {
    static readonly type = '[Cart] Clear cart';
  }
  export class RemoveFromCart {
    static readonly type = '[Cart] remove from cart';
    constructor(public payload: {id: number}) {}
  }
}
