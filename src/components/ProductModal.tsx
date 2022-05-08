import {
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  Box,
  Icon,
  Flex,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import ButtonBrand from './ButtonBrand';
import { ProductContext } from './contexts/ProductProvider';
import Toast from './Toast';
import RatingShow from './RatingShow';

const ProductModal: React.FC = () => {
  const productContext = useContext(ProductContext);
  const dispatch = useDispatch();
  const toast = useToast();
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
      <ModalContent pos="relative" py={{ base: 0, md: 20 }}>
        {mobile ? (
          <Box pos="absolute" h="55%" bg="darkGray" w="100%" top="0" left="0" />
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
        {mobile ? (
          <Flex>
            <ButtonBrand onClick={productContext.onClose}>← BACK</ButtonBrand>
          </Flex>
        ) : (
          <ModalCloseButton />
        )}
        <ModalBody>
          <Flex
            direction={{ base: 'column-reverse', md: 'row' }}
            alignItems="center"
            justifyContent={{ base: 'space-between', md: undefined }}
            h={{ base: '90vh', md: 'inherit' }}
          >
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              flexBasis="60%"
              pos="relative"
            >
              {sale && !mobile ? (
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
              ) : null}
              <VStack bg="darkGray" px="20" py="16" alignItems="flex-start">
                {sale && mobile ? (
                  <Text
                    h="5"
                    bg="brand"
                    px="4"
                    color="darkGray"
                    lineHeight="1.2"
                  >
                    sale
                  </Text>
                ) : null}
                <Heading>{title}</Heading>
                <RatingShow rating={rating} />
                <Text>Compound:</Text>
                <Text>{compound}</Text>
              </VStack>
              <Box mt="-5">
                <ButtonBrand
                  onClick={() => {
                    dispatch(addToCart(product));
                    toast({
                      duration: 1500,
                      position: 'bottom-right',
                      render: () => (
                        <Toast text={`${product.title} added to cart`} />
                      ),
                    });
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
