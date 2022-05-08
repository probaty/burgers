import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const customErrorPage: NextPage = () => {
  return (
    <Center minH="80vh">
      <VStack>
        <Heading fontSize="9xl">404</Heading>
        <Text fontSize="xl">This page could not be found.</Text>
      </VStack>
    </Center>
  );
};

export default customErrorPage;
