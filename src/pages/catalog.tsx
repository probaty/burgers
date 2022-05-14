import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import ProductProvider from '../components/contexts/ProductProvider';
import ProductModal from '../components/ProductModal';
import Catalog from '../components/sections/Catalog/Catalog';
import { getProducts } from '../helpers';
import { Product } from '../types/product';

const CatalogPage: NextPage<{ defaultProducts: Product[] }> = ({
  defaultProducts,
}) => {
  return (
    <ProductProvider>
      <ProductModal />
      <Box>
        <VStack w="full">
          <Heading py="10" fontSize="5xl">
            catalog
          </Heading>
          <Catalog serverData={defaultProducts} />
        </VStack>
      </Box>
    </ProductProvider>
  );
};

export async function getStaticProps() {
  const defaultProducts = await getProducts(20);
  return { props: { defaultProducts } };
}

export default CatalogPage;
