import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Toast: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box bg="darkGray" boxShadow="0 0 0 3px #ffdea0bb" px="3" py="2">
      <Text>{text}</Text>
    </Box>
  );
};

export default Toast;
