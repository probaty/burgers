import { Box, Flex, HStack, Icon } from '@chakra-ui/react';
import React, { FC, ReactChild, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const RatingShow: FC<{ rating: number }> = ({ rating }) => {
  const stars: ReactChild[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <Box px={1} py={0} key={i}>
          <Icon as={AiFillStar} color="brand" key={i}></Icon>
        </Box>
      );
    } else {
      stars.push(
        <Box px={1} py={0} key={i}>
          <Icon as={AiOutlineStar} color="brand" key={i}></Icon>
        </Box>
      );
    }
  }
  return <Flex>{stars}</Flex>;
};

export default RatingShow;
