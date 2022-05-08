import { useDispatch } from 'react-redux';
import { loadOff, loadOn } from '../store/slices/loadingAuthSlice';

export const useAuthLoadToggle = () => {
  const dispatch = useDispatch();
  return {
    off() {
      dispatch(loadOff());
    },
    on() {
      dispatch(loadOn());
    },
  };
};
