import { Container } from '@chakra-ui/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuthLoadToggle } from '../../hooks/useAuthLoadToggle';
import { removeUser, setUser } from '../../store/slices/userSlice';
import Navbar from '../Navbar';

const Layout: FC = ({ children }) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const loading = useAuthLoadToggle();

  useEffect(() => {
    const subscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            isAnonymous: user.isAnonymous,
          })
        );
        loading.off();
      } else {
        dispatch(removeUser());
        loading.off();
      }
    });

    return subscription;
  }, []);

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" px={{ base: 0, md: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
