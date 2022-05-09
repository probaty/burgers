import { Timestamp } from 'firebase/firestore';
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

export type OrderPropsWithId = OrderProps & {
  id: string;
  createdTime: Timestamp;
};
