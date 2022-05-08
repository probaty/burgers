import { useTypedSelector } from './useTypedSelector';

export const useCart = () => {
  const { cart, totalCount } = useTypedSelector((state) => state.cart);
  return {
    isEmpty: totalCount === 0,
    cart,
    totalCount,
  };
};
