import { OrderFormValues } from '../components/Payment';
import { CartState } from '../store/slices/cartSlice';
import { OrderProps } from '../types/order';

export const createOrder = (
  userId: string,
  cart: CartState[],
  payment: string,
  { address, cardNumber, cvv, expDate }: OrderFormValues
): OrderProps => {
  if (payment === 'CASH ON DELIVERY') {
    return {
      address,
      cart,
      userId,
      paymentMethod: payment,
    };
  } else {
    return {
      address,
      cart,
      userId,
      paymentMethod: payment,
      cardNumber,
      cvv,
      expDate,
    };
  }
};
