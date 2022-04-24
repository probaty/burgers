import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const ErrorBox: React.FC = ({ children }) => {
  return (
    <Box border="2px solid" borderColor="red.300" w="full" py={2}>
      <Center>
        <Text>{children}</Text>
      </Center>
    </Box>
  );
};

export default ErrorBox;
