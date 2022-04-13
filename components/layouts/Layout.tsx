import { Container } from '@chakra-ui/react';
import React, { FC } from 'react';
import Navbar from '../Navbar';

const Layout: FC = ({ children }) => {
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