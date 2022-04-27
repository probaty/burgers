import { Box, Heading, Skeleton, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Card from '../components/Card';
import ProductProvider from '../components/contexts/ProductProvider';
import ProductModal from '../components/ProductModal';
import OurProducts from '../components/sections/OurProducts';

const SaleSection = dynamic(() => import('../components/sections/SaleSection'));

const Home: NextPage = () => {
  return (
    <ProductProvider>
      <ProductModal />
      <VStack py="10" spacing="20">
        <SaleSection />
        <OurProducts />
      </VStack>
    </ProductProvider>
  );
};

export default Home;
