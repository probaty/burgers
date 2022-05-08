import { useTypedSelector } from './useTypedSelector';

export const useAuthLoading = () => {
  const { loading } = useTypedSelector((state) => state.loading);

  return loading;
};
