import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';

const ButtonBrand: FC<{
  dark?: boolean;
  onClick?: Function;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}> = ({
  children,
  onClick,
  type = undefined,
  dark = false,
  disabled,
  ...props
}) => {
  if (dark) {
    return (
      <Button
        {...props}
        type={type}
        disabled={disabled}
        bg={'darkGray'}
        onClick={onClick ? () => onClick() : undefined}
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
      type={type}
      disabled={disabled}
      onClick={onClick ? () => onClick() : undefined}
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
