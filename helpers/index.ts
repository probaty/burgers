import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useAuthLoadToggle } from '../hooks/useAuthLoadToggle';

const authUserEmail = (
  email: string,
  password: string,
  setError: Function,
  loadOff: Function
) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    setError(error.message);
    loadOff();
  });
};

const registerUserEmail = (
  email: string,
  password: string,
  setError: Function,
  loadOff: Function
) => {
  const auth = getAuth();
  console.log(email, password);

  createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    setError(error.message);
    loadOff();
  });
};

const authWithGoogle = (setError: Function, loadOff: Function) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).catch((error) => {
    setError(error.message);
    loadOff();
  });
};

export { authUserEmail, authWithGoogle, registerUserEmail };
