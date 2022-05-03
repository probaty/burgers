import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Card from '../components/Card';
import Cart from '../components/sections/Cart';

const Home: NextPage = () => {
  return (
    <Box>
      <Cart />
    </Box>
  );
};

export default Home;
