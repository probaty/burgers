import { CartState } from '../store/slices/cartSlice';

export interface OrderProps {
  userId: string;
  cart: CartState[];
  address: string;
  paymentMethod: string;
  cardNumber?: number;
  expDate?: number;
  cvv?: number;
}
