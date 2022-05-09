import { CartState } from '../store/slices/cartSlice';

export interface OrderProps {
  userId: string;
  cart: CartState[];
  address: string;
  paymentMethod: string;
  totalPrice: number;
  cardNumber?: number;
  expDate?: number;
  cvv?: number;
}
