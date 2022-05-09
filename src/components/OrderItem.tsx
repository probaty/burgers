import {
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { OrderPropsWithId } from '../types/order';

const OrderItem: React.FC<{ order: OrderPropsWithId }> = ({ order }) => {
  console.log(order);

  return (
    <VStack w="full" p="5" bg="black">
      <HStack alignItems="center" spacing={3} w="full">
        <VStack alignItems="flex-start">
          <Text>{order.createdTime.toDate().toLocaleString()}</Text>
          <Text>paid: {order.totalPrice} ₽</Text>
        </VStack>
        <Divider orientation="vertical" h="20" opacity="0.4" />
        <VStack alignItems="flex-start">
          <Text>address: {order.address}</Text>
          <Text textTransform="lowercase">payment: {order.paymentMethod}</Text>
        </VStack>
      </HStack>
      <SimpleGrid columns={3} gap="2" w="full">
        {order.cart.map((el) => (
          <HStack
            key={el.product.id}
            bg="darkGray"
            justifyContent="space-between"
            px="2"
            py="1"
          >
            <Text>{el.product.title}</Text>
            <Text>{el.count}</Text>
          </HStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default OrderItem;
