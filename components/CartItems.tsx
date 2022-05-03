import { Divider, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';

const CartItems: React.FC = () => {
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
      p="8"
      alignItems="flex-start"
      h="full"
      w="full"
      bg="black"
      spacing="7"
    >
      <VStack w="full" alignItems="stretch" overflowY="auto">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.product.id} cartItem={cartItem} />
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

export default React.memo(CartItems);
