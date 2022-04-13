import {
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import NextLink from 'next/link';

const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<Icon as={RiMenu3Fill} h="8" w="6"></Icon>}
        borderRadius="0"
        h="12"
        w="12"
        bg="darkGray"
        _active={{ bg: 'darkGray' }}
        _hover={{ bg: 'darkGray' }}
      />
      <MenuList bg="darkGray" border="none">
        <NextLink href="/" passHref>
          <Link>
            <MenuItem
              bgColor="darkGray"
              _hover={{ backgroundColor: '#333345' }}
              _active={{ backgroundColor: '#333345' }}
              _focus={{ backgroundColor: '#333345' }}
            >
              Home
            </MenuItem>
          </Link>
        </NextLink>
        <NextLink href="/catalog" passHref>
          <Link>
            <MenuItem
              _hover={{ backgroundColor: '#333345' }}
              _active={{ backgroundColor: '#333345' }}
              _focus={{ backgroundColor: '#333345' }}
            >
              Catalog
            </MenuItem>
          </Link>
        </NextLink>
        <MenuDivider borderColor="#4a4a61" />
        <NextLink href="/profile" passHref>
          <Link>
            <MenuItem
              _hover={{ backgroundColor: '#333345' }}
              _active={{ backgroundColor: '#333345' }}
              _focus={{ backgroundColor: '#333345' }}
            >
              My Account
            </MenuItem>
          </Link>
        </NextLink>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
