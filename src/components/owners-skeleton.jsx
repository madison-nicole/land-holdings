/* eslint-disable react/no-array-index-key */
import { Skeleton, Card } from '@chakra-ui/react';
import React from 'react';
import { alternateBgColor, alternateCardColor } from '../utils/style-utils';

function OwnersSkeleton() {
  const renderedSkeleton = Array.from(Array(10).keys()).map((_, idx) => {
    return (
      <Card
        bg={alternateBgColor(idx)}
        border="solid"
        borderRadius={6}
        color="#06253f"
        direction={{ base: 'column', sm: 'row' }}
        height="88px"
        key={idx}
        mb="4px"
        ml={40}
        mr={40}
        overflow="hidden"
        variant={alternateCardColor(idx)}
        width="600px"
      >
        <Skeleton height="100%" width="100%" />
      </Card>
    );
  });
  return renderedSkeleton;
}

export default OwnersSkeleton;
