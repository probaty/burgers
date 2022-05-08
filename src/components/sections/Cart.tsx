import { Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import CartItems from '../CartItems';
import Payment from '../Payment';

const Cart: React.FC = () => {
  return (
    <Flex maxH="90vh" minH="90vh">
      <VStack alignItems="flex-start" flexBasis="60%" pt="10" pb="20">
        <Heading>shoping cart</Heading>
        <CartItems />
      </VStack>
      <VStack
        spacing="6"
        direction="column"
        alignItems="flex-start"
        flexBasis="40%"
        bg="darkGray"
        py="10"
        px="12"
      >
        <Heading>payment</Heading>
        <Payment />
      </VStack>
    </Flex>
  );
};

export default Cart;
