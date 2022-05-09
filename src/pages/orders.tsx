import { Center, Heading, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import OrderItem from '../components/OrderItem';
import { getOrderHistory } from '../helpers';
import { useAuth } from '../hooks/useAuth';
import { OrderPropsWithId } from '../types/order';

const Orders: NextPage = () => {
  const [orders, setOrders] = useState<OrderPropsWithId[]>([]);
  const router = useRouter();
  const { id } = useAuth();

  useEffect(() => {
    if (id) {
      getOrderHistory(id).then((data) => setOrders(data));
    } else {
      router.replace('/');
    }
  }, [id, router]);

  if (orders.length === 0) {
    return (
      <Center minH="80vh">
        <Heading size="2xl">Order list is empty</Heading>
      </Center>
    );
  }

  return (
    <VStack py="10">
      {orders.map((el) => (
        <OrderItem order={el} key={el.id} />
      ))}
    </VStack>
  );
};

export default Orders;
