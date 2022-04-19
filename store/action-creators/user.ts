import { getAuth, signInAnonymously } from 'firebase/auth';
import { Dispatch } from 'redux';

import { UserActions, UserActionTypes } from '../types/user';

export const authAnonymusUser = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    const auth = getAuth();
    try {
      dispatch({ type: UserActionTypes.AUTH_PROGRESS });
      const { user } = await signInAnonymously(auth);
      dispatch({
        type: UserActionTypes.AUTH_ANONYMUS_USERS,
        payload: {
          email: user.email,
          uid: user.uid,
          isAnonymous: user.isAnonymous,
        },
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.AUTH_ERROR,
        payload: 'Authorization error!',
      });
    }
  };
};
