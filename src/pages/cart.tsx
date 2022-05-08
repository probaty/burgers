import {
  Box,
  Center,
  Heading,
  useBreakpointValue,
  Spinner,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import MobileCart from '../components/mobile/MobileCart';
import Cart from '../components/sections/Cart';
import { useCart } from '../hooks/useCart';

const Home: NextPage = () => {
  const { isEmpty } = useCart();
  const mobile = useBreakpointValue({ base: true, lg: false });
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  if (isEmpty) {
    return (
      <Center minH="90vh">
        <Heading size="xl">Cart is empty</Heading>
      </Center>
    );
  }

  if (show) return <Box>{mobile ? <MobileCart /> : <Cart />}</Box>;

  return (
    <Center minH="90vh">
      <Spinner color="brand" size="xl" thickness="5px" />
    </Center>
  );
};

export default Home;
