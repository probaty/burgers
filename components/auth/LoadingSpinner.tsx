import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <Center
      pos="absolute"
      w="full"
      h="full"
      top="0"
      left="0"
      bg="blackAlpha.500"
      zIndex="overlay"
    >
      <Spinner color="brand" size="xl" thickness="5px" />
    </Center>
  );
};

export default LoadingSpinner;
