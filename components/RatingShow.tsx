import { Box, Flex, HStack, Icon } from '@chakra-ui/react';
import React, { FC, ReactChild, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const RatingShow: FC<{ rating: number; small?: boolean }> = ({
  rating,
  small,
}) => {
  const stars: ReactChild[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <Box key={i}>
          <Icon
            as={AiFillStar}
            w={small ? '3' : undefined}
            h={small ? '3' : undefined}
            color="brand"
            key={i}
          ></Icon>
        </Box>
      );
    } else {
      stars.push(
        <Box key={i}>
          <Icon
            as={AiOutlineStar}
            w={small ? '3' : undefined}
            h={small ? '3' : undefined}
            color="brand"
            key={i}
          ></Icon>
        </Box>
      );
    }
  }
  return <HStack spacing={small ? 0.5 : 2}>{stars}</HStack>;
};

export default RatingShow;
