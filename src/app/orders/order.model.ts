import { CartProduct } from '../state/cart/cart.state';

export interface MakeOrderRequest {
  user: User;
  products: CartProduct[];
}

export interface User {
  name: string;
  email: string;
}

export interface Order {
  products: CartProduct[];
  user: User;
  id: number;
  createDate: Date;
  total:number;
}
