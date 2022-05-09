import {
  Radio,
  RadioGroup,
  VStack,
  Text,
  Input,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { getAuth, signInAnonymously } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { storeOrder } from '../helpers';
import { createOrder } from '../helpers/order';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import { clearCart } from '../store/slices/cartSlice';
import { OrderProps } from '../types/order';
import ButtonBrand from './ButtonBrand';
import Toast from './Toast';

export interface OrderFormValues {
  address: string;
  cardNumber?: number;
  expDate?: number;
  cvv?: number;
}

const Payment: React.FC = () => {
  const { register, handleSubmit } = useForm<OrderFormValues>();
  const { id } = useAuth();
  const { cart } = useCart();
  const [value, setValue] = useState('CASH ON DELIVERY');
  const dispatch = useDispatch();
  const toast = useToast();

  const calcTotal = () => {
    let total = 0;
    cart.forEach((value) => {
      total += value.product.price * value.count;
    });
    return total;
  };

  const onSubmit = (data: OrderFormValues) => {
    if (id) {
      const order = createOrder(id, cart, value, calcTotal(), data);
      storeOrder(order)
        .then((_) => onSuccess())
        .catch((_) => onError());
    } else {
      const auth = getAuth();
      signInAnonymously(auth).then(({ user }) => {
        const order = createOrder(user.uid, cart, value, calcTotal(), data);
        storeOrder(order)
          .then((_) => {
            onSuccess();
          })
          .catch((_) => onError());
      });
    }
  };

  const onSuccess = () => {
    dispatch(clearCart());
    toast({
      duration: 1500,
      position: 'bottom-right',
      render: () => <Toast text="Your order has been sent" />,
    });
  };
  const onError = () => {
    toast({
      duration: 1500,
      position: 'bottom-right',
      render: () => <Toast error text="error when placing an order" />,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <VStack alignItems="flex-start" w="full">
        <RadioGroup onChange={setValue} value={value}>
          <VStack alignItems="flex-start">
            <Radio
              _checked={{ bg: 'brand', borderColor: 'brand' }}
              value="CASH ON DELIVERY"
            >
              <Text fontSize="sm">CASH ON DELIVERY</Text>
            </Radio>
            <Radio
              _checked={{ bg: 'brand', borderColor: 'brand' }}
              value="ONLINE PAYMENT"
            >
              <Text fontSize="sm">ONLINE PAYMENT</Text>
            </Radio>
          </VStack>
        </RadioGroup>
        <Input
          type="text"
          variant="flushed"
          placeholder="Address"
          focusBorderColor="brand"
          {...register('address', { required: true })}
        />
        {value === 'ONLINE PAYMENT' && (
          <>
            <Input
              type="number"
              variant="flushed"
              placeholder="Card Number"
              focusBorderColor="brand"
              {...register('cardNumber', {
                required: true,
                shouldUnregister: true,
              })}
            />
            <HStack>
              <Input
                flexBasis="70%"
                type="number"
                variant="flushed"
                placeholder="Exp.Date"
                focusBorderColor="brand"
                {...register('expDate', {
                  required: true,
                  shouldUnregister: true,
                })}
              />{' '}
              <Input
                flexBasis="30%"
                type="number"
                variant="flushed"
                placeholder="CVV"
                focusBorderColor="brand"
                {...register('cvv', {
                  required: true,
                  maxLength: 3,
                  shouldUnregister: true,
                })}
              />
            </HStack>
          </>
        )}
        <HStack justifyContent="center" w="full" pt="10">
          <ButtonBrand type="submit">CHECKOUT</ButtonBrand>
        </HStack>
      </VStack>
    </form>
  );
};

export default Payment;
