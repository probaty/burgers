import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { IoAdd, IoRemove, IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  CartState,
  removeFormCart,
  removeOneProductFromCart,
} from '../store/slices/cartSlice';
import RatingShow from './RatingShow';

const CartItem: React.FC<{ cartItem: CartState }> = ({ cartItem }) => {
  const { count, product } = cartItem;
  const dispatch = useDispatch();
  const { imageUrl, price, title, rating } = product;
  return (
    <HStack>
      <HStack flexBasis="80%">
        <Box bg="brandGray" px="0.5" mt="4">
          <Image mt="-4" w="100px" h="80px" src={imageUrl} alt={title} />
        </Box>
        <VStack spacing="1" justifyContent="center" alignItems="flex-start">
          <Heading size="md">{title}</Heading>
          <RatingShow rating={rating} />
        </VStack>
      </HStack>

      <HStack justifyContent="space-between" w="full" pr="4">
        <Divider orientation="vertical" h="16" opacity="0.2" />
        <VStack flexBasis="15%">
          <Heading size="sm" opacity="0.5">
            price
          </Heading>
          <Text fontSize="sm">{price} ₽</Text>
        </VStack>
        <Divider orientation="vertical" h="16" opacity="0.2" />
        <VStack flexBasis="30%">
          <Heading size="sm" opacity="0.5">
            quantity
          </Heading>
          <HStack>
            <IconButton
              onClick={() => {
                if (count === 1) return;
                dispatch(removeOneProductFromCart(product));
              }}
              size="sm"
              icon={<Icon as={IoRemove} h="5" w="5"></Icon>}
              borderRadius="0"
              bg="transparent"
              _active={{ bg: 'darkGray' }}
              _hover={{ bg: 'darkGray' }}
              aria-label={'remove one'}
            />
            <Text fontSize="sm">{count}</Text>
            <IconButton
              onClick={() => {
                dispatch(addToCart(product));
              }}
              size="sm"
              icon={<Icon as={IoAdd} h="5" w="5"></Icon>}
              borderRadius="0"
              bg="transparent"
              _active={{ bg: 'darkGray' }}
              _hover={{ bg: 'darkGray' }}
              aria-label={'remove one'}
            />
          </HStack>
        </VStack>
        <Divider orientation="vertical" h="16" opacity="0.2" />
        <VStack flexBasis="20%">
          <Heading size="sm" opacity="0.5">
            total
          </Heading>
          <Text fontSize="sm">{price * count} ₽</Text>
        </VStack>
        <Divider orientation="vertical" h="16" opacity="0.2" />
        <IconButton
          onClick={() => {
            dispatch(removeFormCart(product));
          }}
          size="sm"
          icon={<Icon as={IoClose} h="5" w="5" opacity="0.8" />}
          borderRadius="0"
          bg="brandGray"
          _active={{ bg: 'brand', color: 'darkGray' }}
          _hover={{ bg: 'brand', color: 'darkGray' }}
          aria-label={'remove one'}
        />
      </HStack>
    </HStack>
  );
};

export default React.memo(CartItem);
