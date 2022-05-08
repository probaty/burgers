import React from 'react';
import {
  Divider,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  IconButton,
  Icon,
  Center,
} from '@chakra-ui/react';
import { IoAdd, IoRemove, IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  CartState,
  removeFormCart,
  removeOneProductFromCart,
} from '../../store/slices/cartSlice';
import RatingShow from '../RatingShow';

const MobileCartItem: React.FC<{ cartItem: CartState }> = ({ cartItem }) => {
  const { count, product } = cartItem;
  const dispatch = useDispatch();
  const { imageUrl, price, title, rating } = product;
  return (
    <HStack bg="black" alignItems="stretch" h="90px">
      <HStack flexBasis="50%">
        <Center bg="brandGray" h="90px">
          <Image maxW="20" src={imageUrl} alt={title} />
        </Center>
        <VStack spacing="1" justifyContent="center" alignItems="flex-start">
          <Heading size="sm">{title}</Heading>
          <RatingShow small rating={rating} />
        </VStack>
      </HStack>

      <HStack justifyContent="flex-end" flexBasis="50%" pr="5" spacing="0">
        <Divider orientation="vertical" h="16" opacity="0.2" />
        <VStack flexBasis="55%">
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
            <Text fontSize="xs">{count}</Text>
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
        <VStack flexBasis="45%">
          <Heading size="sm" opacity="0.5">
            total
          </Heading>
          <Text fontSize="xs">{price * count} ₽</Text>
        </VStack>
        <IconButton
          pos="absolute"
          right="1"
          onClick={() => {
            dispatch(removeFormCart(product));
          }}
          size="sm"
          icon={<Icon as={IoClose} h="5" w="5" opacity="0.8" />}
          borderRadius="0"
          bg="brand"
          color="darkGray"
          aria-label={'remove'}
        />
      </HStack>
    </HStack>
  );
};

export default MobileCartItem;
