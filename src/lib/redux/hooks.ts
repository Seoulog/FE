import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook
} from 'react-redux';
import { type RootState, type AppDispatch } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
