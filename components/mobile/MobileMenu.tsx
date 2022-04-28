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
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from '../../hooks/useAuth';

const MobileMenu: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth);
  };
  const { email, isAuth } = useAuth();

  return (
    <Menu autoSelect={false}>
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
        <MenuGroup title="Pages">
          <NextLink href="/" passHref>
            <Link>
              <MenuItem>Home</MenuItem>
            </Link>
          </NextLink>
          <NextLink href="/catalog" passHref>
            <Link>
              <MenuItem>Catalog</MenuItem>
            </Link>
          </NextLink>
        </MenuGroup>
        <MenuDivider borderColor="#4a4a61" />
        <MenuGroup title="My Account">
          {isAuth ? (
            <>
              <MenuItem
                _focus={{
                  backgroundColor: '#333345',
                  boxShadow: 'none !important',
                }}
              >
                {email}
              </MenuItem>
              <NextLink href="/orders" passHref>
                <Link>
                  <MenuItem>Order history</MenuItem>
                </Link>
              </NextLink>
              <MenuDivider borderColor="#4a4a61" />

              <MenuItem onClick={() => handleLogout()}>LogOut</MenuItem>
            </>
          ) : (
            <MenuItem onClick={onOpen}>LogIn</MenuItem>
          )}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
