import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { useCart } from '../../hooks/useCart';
import CartItems from '../CartItems';

const Cart: React.FC = () => {
  return (
    <Flex maxH="90vh" minH="90vh">
      <VStack alignItems="flex-start" flexBasis="60%" pt="10" pb="20">
        <Heading>shoping cart</Heading>
        <CartItems />
      </VStack>
      <VStack
        alignItems="flex-start"
        flexBasis="40%"
        bg="darkGray"
        py="10"
        px="12"
      >
        <Heading>payment</Heading>
      </VStack>
    </Flex>
  );
};

export default Cart;
