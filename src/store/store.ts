import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootSlice from '@/store/reducers/rootSlice';
import cartSlice from '@/store/reducers/cartSlice';

const rootReducer = combineReducers({
  rootSlice,
  cartSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
