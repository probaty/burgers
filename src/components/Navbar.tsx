import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import CartLink from './CartLink';
import NextLink from 'next/link';

import ProfileButton from './ProfileButton';
import { useAuth } from '../hooks/useAuth';
import dynamic from 'next/dynamic';
import { useCart } from '../hooks/useCart';

const AuthModal = dynamic(() => import('./auth/AuthModal'));
const MobileMenu = dynamic(() => import('./mobile/MobileMenu'));

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth } = useAuth();
  const { totalCount } = useCart();

  const mobile = useBreakpointValue({ base: true, md: false });
  const cart = <CartLink count={totalCount} />;

  useEffect(() => {
    if (isAuth) {
      onClose();
    }
  }, [isAuth, onClose]);

  return (
    <Box bg="#292d36ee" pos="sticky" zIndex="sticky" top={0} h="12">
      <Container maxW="container.xl" h="full" px={{ base: 0, md: 4 }}>
        <Flex alignItems="center" justifyContent="space-between" h="full">
          <NextLink href="/" passHref>
            <Link _hover={{ textDecoration: 'none' }} fontSize={24}>
              Burgers
            </Link>
          </NextLink>
          <AuthModal isOpen={isOpen} onClose={onClose} />

          {!mobile ? (
            <>
              <HStack spacing={12}>
                <NextLink href="/" passHref>
                  <Link>home</Link>
                </NextLink>
                <NextLink href="/catalog" passHref>
                  <Link>catalog</Link>
                </NextLink>
              </HStack>
              <Flex>
                {cart}
                <ProfileButton onOpen={onOpen} />
              </Flex>
            </>
          ) : (
            <Flex alignItems="center" gap="10px">
              {cart}
              <Text fontSize={12}>MENU</Text>
              <MobileMenu onOpen={onOpen} />
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
