import { Heading, SimpleGrid, Skeleton, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../helpers';
import { Product } from '../../types/product';
import Card from '../Card';
import SkeletonCard from '../SkeletonCard';

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <VStack spacing={6}>
      <Heading>Our Production</Heading>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing="6">
        {products.length > 0 ? (
          products.map((doc) => <Card key={doc.id} product={doc} />)
        ) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default OurProducts;
