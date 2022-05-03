import {
  Box,
  Heading,
  VStack,
  Image,
  Text,
  Flex,
  Icon,
  HStack,
  useToast,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import RatingShow from './RatingShow';
import ButtonBrand from './ButtonBrand';
import { MdAddShoppingCart } from 'react-icons/md';
import { Product } from '../types/product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { ProductContext } from './contexts/ProductProvider';
import Toast from './Toast';

const Card: React.FC<{ product: Product }> = ({ product }) => {
  const { imageUrl, title, rating, price, sale } = product;
  const productContext = useContext(ProductContext);
  const toast = useToast();

  const dispatch = useDispatch();
  return (
    <Box
      w={60}
      h={72}
      pos="relative"
      onClick={() => {
        productContext?.setCurrentProduct(product);
        productContext?.onOpen();
      }}
      cursor="pointer"
    >
      <Box
        bg="brandGray"
        w="full"
        h="245px"
        pos="absolute"
        top="6"
        bottom="6"
        zIndex={-1}
      />
      {sale && (
        <Text
          pos="absolute"
          top="88px"
          h="5"
          bg="brand"
          px="4"
          color="darkGray"
          lineHeight="1.2"
          // left="5"
          transformOrigin="0 0"
          transform="rotate(-90deg)"
        >
          sale
        </Text>
      )}
      <VStack
        alignItems="center"
        spacing={0}
        justifyContent="space-between"
        h="full"
      >
        <Box w="56" h="36">
          <Image mt="-4" src={imageUrl} alt="изображение бургера"></Image>
        </Box>
        <Flex direction="column" alignItems="center" gap="5px">
          <Heading size="brand" opacity={0.8}>
            {title}
          </Heading>
          <RatingShow rating={rating} />
          <Heading size="price">{price} ₽</Heading>
        </Flex>
        <ButtonBrand
          dark
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
            toast({
              duration: 1500,
              position: 'bottom-right',
              render: () => <Toast text={`${product.title} added to cart`} />,
            });
          }}
        >
          <HStack>
            <Icon as={MdAddShoppingCart} fontSize="20"></Icon>
            <Text>+ Add to cart</Text>
          </HStack>
        </ButtonBrand>
      </VStack>
    </Box>
  );
};

export default Card;
