import { CartProduct } from '../state/cart/cart.state';

export interface MakeOrderRequest {
  user: User;
  products: CartProduct[];
}

export interface User {
  name: string;
  email: string;
  id: number;
}

export interface Order {
  products: CartProduct[];
  user: User;
  id: number;
  createDate: number;
  total?:number;
}
