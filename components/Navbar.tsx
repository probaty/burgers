import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import CartLink from './CartLink';
import NextLink from 'next/link';
import MobileMenu from './mobile/MobileMenu';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import AuthModal from './auth/AuthModal';
import ProfileMenu from './ProfileMenu';
import ProfileButton from './ProfileButton';
import { useAuth } from '../hooks/useAuth';

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, token, email } = useAuth();
  console.log(email);

  const mobile = useBreakpointValue({ base: true, md: false });
  const cart = <CartLink count={2} />;

  useEffect(() => {
    if (isAuth) {
      onClose();
    }
  }, [isAuth, onClose]);

  return (
    <Box bg="#292d3688" pos="sticky" zIndex="sticky" h="12">
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
              <MobileMenu />
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
