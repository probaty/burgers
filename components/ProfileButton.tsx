import { Icon, IconButton } from '@chakra-ui/react';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from '../hooks/useAuth';
import { UserModel } from '../store/types/userModel';
import ProfileMenu from './ProfileMenu';

const ProfileButton: React.FC<{
  onOpen: () => void;
}> = ({ onOpen }) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return (
      <IconButton
        onClick={onOpen}
        bg={'brand'}
        h="12"
        w="12"
        aria-label="profile"
        color="background"
        borderRadius={0}
        _hover={{ bg: '#d9bc86' }}
        icon={<Icon w="6" h="6" as={CgProfile} />}
      />
    );
  }
  if (isAuth) {
    return <ProfileMenu />;
  }
  return (
    <IconButton
      bg={'brand'}
      h="12"
      w="12"
      aria-label="profile"
      color="background"
      borderRadius={0}
      _hover={{ bg: '#d9bc86' }}
      icon={<Icon w="6" h="6" as={CgProfile} />}
    />
  );
};

export default ProfileButton;
