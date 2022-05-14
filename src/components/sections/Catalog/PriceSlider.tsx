import {
  HStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const PriceSlider: React.FC<{
  setSliderThumbsValues: React.Dispatch<React.SetStateAction<number[]>>;
  setSliderEndValues: React.Dispatch<React.SetStateAction<number[]>>;
  sliderThumbsValues: number[];
}> = ({ setSliderThumbsValues, sliderThumbsValues, setSliderEndValues }) => {
  return (
    <HStack spacing={5}>
      <Text>PRICE</Text>
      <RangeSlider
        min={0}
        max={800}
        step={10}
        defaultValue={[0, 400]}
        minW="64"
        size="sm"
        onChange={(value: number[]) => setSliderThumbsValues(value)}
        onChangeEnd={(value: number[]) => setSliderEndValues(value)}
      >
        <RangeSliderTrack bg="rgb(69, 71, 74)">
          <RangeSliderFilledTrack bg="brand" />
        </RangeSliderTrack>
        <RangeSliderThumb
          index={0}
          _focus={{ boxShadow: '0 0 0 2px #ffdea099' }}
          pos="relative"
        >
          <Flex
            pos="absolute"
            bottom={4}
            fontSize="smaller"
            gap="1"
            opacity={0.6}
          >
            <Text>{sliderThumbsValues[0]}</Text>
            <Text>₽</Text>
          </Flex>
        </RangeSliderThumb>
        <RangeSliderThumb
          index={1}
          _focus={{ boxShadow: '0 0 0 2px #ffdea099' }}
          pos="relative"
        >
          <Flex
            pos="absolute"
            bottom={4}
            fontSize="smaller"
            gap="1"
            opacity={0.6}
          >
            <Text>{sliderThumbsValues[1]}</Text>
            <Text>₽</Text>
          </Flex>
        </RangeSliderThumb>
      </RangeSlider>
    </HStack>
  );
};

export default React.memo(PriceSlider);
