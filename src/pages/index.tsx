import { Box, Heading, Skeleton, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Card from '../components/Card';
import ProductProvider from '../components/contexts/ProductProvider';
import ProductModal from '../components/ProductModal';
import OurProducts from '../components/sections/OurProducts';
import SaleSection from '../components/sections/SaleSection';
import { getProducts, getSaleProducts } from '../helpers';
import { Product } from '../types/product';

const Home: NextPage<{ saleProducts: Product[]; ourProducts: Product[] }> = ({
  saleProducts,
  ourProducts,
}) => {
  return (
    <ProductProvider>
      <ProductModal />
      <VStack py="10" spacing="20">
        <SaleSection data={saleProducts} />
        <OurProducts data={ourProducts} />
      </VStack>
    </ProductProvider>
  );
};

export async function getStaticProps() {
  const saleProducts = await getSaleProducts();
  const ourProducts = await getProducts();
  return { props: { saleProducts, ourProducts } };
}

export default Home;
