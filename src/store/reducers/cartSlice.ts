import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, Product } from '@/declaration/declaration';

interface CartState {
  products: CartProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if (product) {
        product.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<{ id: number }>) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
    increaseProductAmount: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if (product) {
        product.count++;
      }
    },
    decreaseProductAmount: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if (product) {
        product.count--;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;
