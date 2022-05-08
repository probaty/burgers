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
import { getAuth, signOut } from 'firebase/auth';
import NextLink from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from '../hooks/useAuth';

const ProfileMenu: React.FC = () => {
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth);
  };
  const { email } = useAuth();
  return (
    <Menu autoSelect={false}>
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
        <MenuItem
          bgColor="darkGray"
          _focus={{
            backgroundColor: '#333345',
            boxShadow: 'none !important',
          }}
        >
          {email}
        </MenuItem>
        <NextLink href="/orders" passHref>
          <Link>
            <MenuItem bgColor="darkGray">Order history</MenuItem>
          </Link>
        </NextLink>
        <MenuDivider borderColor="#4a4a61" />

        <MenuItem onClick={() => handleLogout()}>LogOut</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
