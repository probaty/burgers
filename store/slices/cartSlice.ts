import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

interface CartState {
  product: Product;
  count: number;
}

const initialState: { cart: CartState[]; totalCount: number } = {
  cart: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      if (state.cart.find((item) => item.product.id === action.payload.id)) {
        state.cart = state.cart.map((item) => {
          if (item.product.id === action.payload.id) {
            item.count += 1;
            return item;
          } else {
            return item;
          }
        });
        state.totalCount += 1;
      } else {
        state.cart = [...state.cart, { product: action.payload, count: 1 }];
        state.totalCount += 1;
      }
    },
    removeOneProductFromCart(state, action: PayloadAction<Product>) {
      const item = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (item) {
        if (item.count === 1) {
          state.cart = state.cart.filter(
            (item) => item.product.id !== action.payload.id
          );
          state.totalCount -= 1;
          return;
        }
        state.cart = state.cart.map((item) => {
          if (item.product.id === action.payload.id) {
            item.count -= 1;
            return item;
          } else {
            return item;
          }
        });
        state.totalCount -= 1;
      }
    },
    removeFormCart(state, action: PayloadAction<Product>) {
      state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload.id
      );
      let count = 0;
      state.cart.forEach((item) => {
        count += item.count;
      });
      state.totalCount = count;
    },
  },
});

export const { removeFormCart, addToCart, removeOneProductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
