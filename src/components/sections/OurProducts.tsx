import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import { Product } from '../../types/product';
import Card from '../Card';

const OurProducts: React.FC<{ data: Product[] }> = ({ data }) => {
  return (
    <VStack spacing={6}>
      <Heading>Our Production</Heading>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing="6">
        {data.map((doc) => (
          <Card key={doc.id} product={doc} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default OurProducts;
