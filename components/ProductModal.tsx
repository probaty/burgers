import {
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  Stack,
  Box,
  Icon,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import ButtonBrand from './ButtonBrand';
import { ProductContext } from './contexts/ProductProvider';
import RatingShow from './RatingShow';

const ProductModal: React.FC = () => {
  const productContext = useContext(ProductContext);
  const dispatch = useDispatch();
  const size = useBreakpointValue({ base: 'full', md: '5xl' });
  const mobile = useBreakpointValue({ base: true, md: false });

  if (productContext === null || productContext.currentProduct === null)
    return null;

  const product = productContext.currentProduct;
  const { imageUrl, title, rating, compound, sale } = product;

  return (
    <Modal
      isOpen={productContext.isOpen}
      onClose={productContext.onClose}
      size={size}
      variant="brand"
      isCentered
    >
      <ModalOverlay />
      <ModalContent pos="relative">
        {mobile ? (
          <Box pos="absolute" h="50%" bg="darkGray" w="100%" top="0" left="0" />
        ) : (
          <Box
            pos="absolute"
            h="100%"
            bg="darkGray"
            w="55%"
            top="0"
            right="0"
          />
        )}
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <Flex
            direction={{ base: 'column-reverse', md: 'row' }}
            alignItems="center"
            justifyContent={{ base: 'space-between', md: undefined }}
            h={{ base: '90vh', md: undefined }}
          >
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              flexBasis="60%"
              pos="relative"
            >
              {sale && (
                <Text
                  pos="absolute"
                  top="64px"
                  h="5"
                  bg="brand"
                  px="4"
                  color="darkGray"
                  lineHeight="1.2"
                  left="0"
                  transformOrigin="0 0"
                  transform="rotate(-90deg)"
                >
                  sale
                </Text>
              )}
              <VStack bg="darkGray" px="20" py="16" alignItems="flex-start">
                <Heading>{title}</Heading>
                <RatingShow rating={rating} />
                <Text>Compound:</Text>
                <Text>{compound}</Text>
              </VStack>
              <Box mt="-5">
                <ButtonBrand
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  <Icon as={MdAddShoppingCart} fontSize="20"></Icon>
                  <Text>+ Add to cart</Text>
                </ButtonBrand>
              </Box>
            </Flex>
            <Box pos="relative" zIndex={9999}>
              <Image w="100%" src={imageUrl} alt={title} />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
