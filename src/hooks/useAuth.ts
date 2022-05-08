import { useTypedSelector } from './useTypedSelector';

export const useAuth = () => {
  const { email, id, isAnonymous } = useTypedSelector((state) => state.user);
  return {
    email,
    id,
    isAnonymous,
    isAuth: !!email,
  };
};
