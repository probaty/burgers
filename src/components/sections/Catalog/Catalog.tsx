import {
  Button,
  ButtonGroup,
  Text,
  Heading,
  HStack,
  VStack,
  SimpleGrid,
  Icon,
  Box,
  Flex,
  Spinner,
  Center,
  GridItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { getQueryProducts } from '../../../helpers';
import { Product } from '../../../types/product';
import Card from '../../Card';
import PriceSlider from './PriceSlider';
import SelectCategory from './SelectCategory';

const Catalog: React.FC<{ serverData: Product[] }> = ({ serverData }) => {
  const productsCategories = ['burger', 'main', 'snack'];
  const [products, setProducts] = useState<Product[]>(serverData);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sliderThumbsValues, setSliderThumbsValues] = useState<number[]>([
    0, 400,
  ]);
  const [sliderEndValues, setSliderEndValues] = useState<number[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const selectCategory = (value: string): void => {
    const includes = selectedCategories.includes(value);
    if (includes) {
      setSelectedCategories((state) => state.filter((prod) => prod !== value));
      return;
    }
    setSelectedCategories((state) => [...state, value]);
  };

  const handleFilter = () => {
    setLoading(true);
    getQueryProducts(selectedCategories, sliderEndValues)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <VStack w="full" px={{ base: 0, lg: 20 }}>
      <HStack
        alignSelf="flex-start"
        justifyContent={{ base: 'center', lg: 'flex-start' }}
        spacing={{ base: 0, lg: 10 }}
        w="full"
        flexWrap="wrap"
      >
        <HStack
          alignSelf="flex-start"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          spacing={[0, 10]}
          pt={{ base: 10, lg: 0 }}
          flexWrap="wrap"
        >
          <Heading pb={{ base: 5, md: 0 }}>Products</Heading>
          <SelectCategory
            productsCategories={productsCategories}
            selectCategory={selectCategory}
            selectedCategories={selectedCategories}
          />
        </HStack>
        <HStack
          alignSelf="flex-start"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          spacing={[0, 10]}
          pt={{ base: 10, lg: 0 }}
          flexWrap="wrap"
        >
          <PriceSlider
            setSliderThumbsValues={setSliderThumbsValues}
            setSliderEndValues={setSliderEndValues}
            sliderThumbsValues={sliderThumbsValues}
          />

          <Flex
            flexGrow={2}
            pt={{ base: 5, md: 0 }}
            justifyContent={{ base: 'center', lg: 'flex-end' }}
          >
            <Button
              leftIcon={<Icon fontSize="xl" as={AiOutlineSearch} />}
              variant="brandDark"
              onClick={handleFilter}
            >
              FILTER
            </Button>
          </Flex>
        </HStack>
      </HStack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="6" pt="8">
        {isLoading ? (
          <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            <Spinner color="brand" size="xl" thickness="5px" />
          </GridItem>
        ) : (
          products.map((prod) => <Card key={prod.id} product={prod} />)
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default Catalog;
