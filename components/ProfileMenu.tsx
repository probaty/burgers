import {
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const ProfileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<Icon w="6" h="6" as={CgProfile} />}
        bg={'brand'}
        h="12"
        w="12"
        aria-label="profile"
        color="background"
        borderRadius={0}
        _hover={{ bg: '#d9bc86' }}
      />
      <MenuList bg="darkGray" border="none">
        <NextLink href="/orders" passHref>
          <Link>
            <MenuItem
              bgColor="darkGray"
              _hover={{ backgroundColor: '#333345' }}
              _active={{ backgroundColor: '#333345' }}
              _focus={{
                backgroundColor: '#333345',
                boxShadow: 'none !important',
              }}
            >
              Order history
            </MenuItem>
          </Link>
        </NextLink>
        <MenuDivider borderColor="#4a4a61" />

        <MenuItem
          _hover={{ backgroundColor: '#333345' }}
          _active={{ backgroundColor: '#333345' }}
          _focus={{ backgroundColor: '#333345', boxShadow: 'none !important' }}
        >
          LogOut
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
