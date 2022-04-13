import { Box, Flex, HStack, Icon } from '@chakra-ui/react';
import React, { FC, ReactChild, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating: FC<{ rating: number }> = ({ rating }) => {
  const [hoverStars, setHoverStars] = useState<number | null>(null);
  const stars: ReactChild[] = [];

  const handleHover = (index: number): void => setHoverStars(index);

  const handleMouseOut = (): void => setHoverStars(null);

  for (let i = 1; i <= 5; i++) {
    const currentStars = hoverStars ? hoverStars : rating;
    if (i <= currentStars) {
      stars.push(
        <Box
          px={1}
          py={0}
          onMouseOver={() => handleHover(i)}
          onMouseOut={() => handleMouseOut()}
          cursor="pointer"
        >
          <Icon as={AiFillStar} color="brand" key={i}></Icon>
        </Box>
      );
    } else {
      stars.push(
        <Box
          px={1}
          py={0}
          onMouseOver={() => handleHover(i)}
          onMouseOut={() => handleMouseOut()}
          cursor="pointer"
        >
          <Icon as={AiOutlineStar} color="brand" key={i}></Icon>
        </Box>
      );
    }
  }
  return <Flex>{stars}</Flex>;
};

export default Rating;
