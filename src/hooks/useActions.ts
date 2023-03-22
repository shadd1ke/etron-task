import { bindActionCreators } from '@reduxjs/toolkit';
import { rootSlice } from '@/store/reducers/rootSlice';
import { cartSlice } from '@/store/reducers/cartSlice';
import { useAppDispatch } from '@/hooks/useTypedSelector';

const rootAction = {
  ...rootSlice.actions,
  ...cartSlice.actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(rootAction, dispatch);
};
