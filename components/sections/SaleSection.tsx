import { Heading, SimpleGrid, Skeleton, VStack } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { getSaleProducts } from '../../helpers';
import { Product } from '../../types/product';
import Card from '../Card';

const SaleSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getSaleProducts().then((data) => setProducts(data));
  }, []);

  return (
    <VStack spacing={6}>
      <Heading>Sale</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
        {products.length > 0 ? (
          products.map((doc) => <Card key={doc.id} product={doc} />)
        ) : (
          <>
            <Skeleton
              w={60}
              h={72}
              startColor="#7d715b"
              endColor="#555b69"
              speed={1}
            />
            <Skeleton
              w={60}
              h={72}
              startColor="#7d715b"
              endColor="#555b69"
              speed={1}
            />
            <Skeleton
              w={60}
              h={72}
              startColor="#7d715b"
              endColor="#555b69"
              speed={1}
            />
            <Skeleton
              w={60}
              h={72}
              startColor="#7d715b"
              endColor="#555b69"
              speed={1}
            />
          </>
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default SaleSection;
