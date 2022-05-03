import {
  Box,
  Center,
  Icon,
  Link as ChakraLink,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import Toast from './Toast';

const CartLink: FC<{ count?: number }> = ({ count }) => {
  const toast = useToast();

  if (!count)
    return (
      <Center
        h="12"
        w="12"
        bg="darkGray"
        pos="relative"
        cursor="pointer"
        tabIndex={0}
        _focus={{ boxShadow: '0 0 0 3px #ffdea0bb', outline: 'none' }}
        onClick={() => {
          toast({
            duration: 1500,
            position: 'bottom-right',
            render: () => <Toast text={`Cart is empty`} />,
          });
        }}
      >
        <Icon as={MdAddShoppingCart} h="6" w="6"></Icon>
      </Center>
    );

  return (
    <Link href="/cart" passHref>
      <ChakraLink>
        <Center h="12" w="12" bg="darkGray" pos="relative">
          {count ? (
            <Box
              pos="absolute"
              top="5px"
              right="5px"
              lineHeight={1.4}
              letterSpacing={0}
              bg="brand"
              color="brandGray"
              borderRadius="full"
              fontSize={11}
              textAlign="center"
              h="4"
              w="4"
            >
              {count}
            </Box>
          ) : null}
          <Icon as={MdAddShoppingCart} h="6" w="6"></Icon>
        </Center>
      </ChakraLink>
    </Link>
  );
};

export default CartLink;
