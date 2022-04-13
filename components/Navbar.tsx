import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { CgProfile } from 'react-icons/cg';
import CartLink from './CartLink';
import NextLink from 'next/link';

const Navbar: FC = () => {
  return (
    <Box bg="#292d3688" pos="sticky" zIndex="sticky" h="12">
      <Container maxW="container.xl" h="full" px={{ base: 0, md: 4 }}>
        <Flex alignItems="center" justifyContent="space-between" h="full">
          <NextLink href="/" passHref>
            <Link _hover={{ textDecoration: 'none' }} fontSize={24}>
              Burgers
            </Link>
          </NextLink>
          <HStack spacing={12}>
            <NextLink href="/" passHref>
              <Link>home</Link>
            </NextLink>
            <NextLink href="/catalog" passHref>
              <Link>catalog</Link>
            </NextLink>
          </HStack>
          <Flex>
            <CartLink count={2} />
            <IconButton
              bg={'brand'}
              h="12"
              w="12"
              aria-label="cart"
              color="background"
              borderRadius={0}
              _hover={{ bg: '#d9bc86' }}
              icon={<Icon w="6" h="6" as={CgProfile} />}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
