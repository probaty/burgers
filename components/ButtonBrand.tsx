import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';

const ButtonBrand: FC<{ dark?: boolean; onClick: Function }> = ({
  children,
  onClick,
  dark = false,
  ...props
}) => {
  if (dark) {
    return (
      <Button
        {...props}
        bg={'darkGray'}
        onClick={() => onClick()}
        borderRadius={0}
        px={5}
        fontSize={12}
        fontWeight={400}
        _hover={{ bg: 'blackAlpha.800' }}
        _active={{ bg: 'blackAlpha.800' }}
        textTransform="uppercase"
      >
        {children}
      </Button>
    );
  }
  return (
    <Button
      {...props}
      bg={'brand'}
      onClick={() => onClick()}
      borderRadius={0}
      px={5}
      color="background"
      fontSize={16}
      _hover={{ bg: '#d9bc86' }}
    >
      {children}
    </Button>
  );
};

export default ButtonBrand;
