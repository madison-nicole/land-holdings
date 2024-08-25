import React from 'react';
import { HStack, Text } from '@chakra-ui/react';

function OwnerField({ field, info }) {
  return (
    <HStack fontSize={13}>
      <Text fontWeight="500">{field}</Text>
      <Text fontWeight="400">{info}</Text>
    </HStack>
  );
}

export default OwnerField;
