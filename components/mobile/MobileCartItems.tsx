import { Divider, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useCart } from '../../hooks/useCart';
import CartItem from '../CartItem';
import MobileCartItem from './MobileCartItem';

const MobileCartItems: React.FC = () => {
  const { cart } = useCart();
  const subTotal = useMemo<number>(() => {
    let total = 0;
    cart.forEach((value) => {
      total += value.product.price * value.count;
    });
    return total;
  }, [cart]);

  return (
    <VStack
      pl="2"
      pr="5"
      pt="8"
      alignItems="flex-start"
      h="full"
      w="full"
      spacing="7"
    >
      <VStack w="full" alignItems="stretch">
        {cart.map((cartItem) => (
          <MobileCartItem key={cartItem.product.id} cartItem={cartItem} />
        ))}
      </VStack>
      <Divider opacity="0.2" />
      <HStack spacing="1">
        <Heading size="md">sub total</Heading>
        <Text p="0.5" fontSize="sm" bg="brandGray">
          {subTotal} ₽
        </Text>
      </HStack>
    </VStack>
  );
};

export default React.memo(MobileCartItems);
