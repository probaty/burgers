import {
  Box,
  Heading,
  VStack,
  Image,
  Text,
  Flex,
  Icon,
  HStack,
} from '@chakra-ui/react';
import burgerImage from '../public/iamges/burger-1.png';
import React, { FC, useContext, useState } from 'react';
// import { Context } from '../pages/_app';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import RatingShow from '../RatingShow';
import ButtonBrand from '../ButtonBrand';
import { MdAddShoppingCart } from 'react-icons/md';

interface CardProps {
  imageUrl?: string;
  title?: string;
  rating?: number;
  price?: number;
  sale?: boolean;
}

const Card: FC<CardProps> = ({ imageUrl, title, rating, price }) => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const storage = getStorage();

  getDownloadURL(ref(storage, 'images/ronny.png'))
    .then((url) => {
      setImgUrl(url);
    })
    .catch((error) => {
      // Handle any errors
    });

  return (
    <Box w={60} h={72} pos="relative">
      <Box
        bg="brandGray"
        w="full"
        h="245px"
        pos="absolute"
        top="6"
        bottom="6"
        zIndex={-1}
      />
      <VStack
        alignItems="center"
        spacing={0}
        justifyContent="space-between"
        h="full"
      >
        <Box w="56" h="36">
          {imgUrl ? (
            <Image src={imgUrl} alt="изображение бургера"></Image>
          ) : null}
        </Box>
        <Flex direction="column" alignItems="center" gap="5px">
          <Heading size="brand" opacity={0.8}>
            Ронни
          </Heading>
          <RatingShow rating={3} />
          <Heading size="price">$9.28</Heading>
        </Flex>
        <ButtonBrand dark onClick={() => {}}>
          <HStack>
            <Icon as={MdAddShoppingCart} fontSize="20"></Icon>
            <Text>Добавить в корзину</Text>
          </HStack>
        </ButtonBrand>
      </VStack>
    </Box>
  );
};

export default Card;
