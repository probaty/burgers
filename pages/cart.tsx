import { Box, Center, Heading, useBreakpointValue } from '@chakra-ui/react';
import type { NextPage } from 'next';
import MobileCart from '../components/mobile/MobileCart';
import Cart from '../components/sections/Cart';
import { useCart } from '../hooks/useCart';

const Home: NextPage = () => {
  const { isEmpty } = useCart();
  const mobile = useBreakpointValue({ base: true, md: true, lg: false });

  if (isEmpty) {
    return (
      <Center minH="90vh">
        <Heading size="xl">Cart is empty</Heading>
      </Center>
    );
  }
  return <Box>{mobile ? <MobileCart /> : <Cart />}</Box>;
};

export default Home;
