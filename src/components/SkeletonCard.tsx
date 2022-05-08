import { Skeleton } from '@chakra-ui/react';
import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <Skeleton w={60} h={72} startColor="#7d715b" endColor="#555b69" speed={1} />
  );
};

export default SkeletonCard;
