import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/declaration/declaration';

interface RootState {
  products: Product[];
}

const initialState: RootState = {
  products: [],
};

export const rootSlice = createSlice({
  name: 'rootSlice',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    }
  },
});

export default rootSlice.reducer;
