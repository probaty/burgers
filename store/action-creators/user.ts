import {
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
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

export const authGoogleUser = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      dispatch({ type: UserActionTypes.AUTH_PROGRESS });
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      dispatch({
        type: UserActionTypes.AUTH_GOOGLE_USERS,
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

export const authEmailUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    const auth = getAuth();
    dispatch({ type: UserActionTypes.AUTH_PROGRESS });
    // const { user } = await signInWithEmailAndPassword(auth, email, password);
    // dispatch({
    //   type: UserActionTypes.AUTH_GOOGLE_USERS,
    //   payload: {
    //     email: user.email,
    //     uid: user.uid,
    //     isAnonymous: user.isAnonymous,
    //   },
    // });

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({
          type: UserActionTypes.AUTH_GOOGLE_USERS,
          payload: {
            email: user.email,
            uid: user.uid,
            isAnonymous: user.isAnonymous,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UserActionTypes.AUTH_ERROR,
          payload: error.message,
        });
      });
  };
};
