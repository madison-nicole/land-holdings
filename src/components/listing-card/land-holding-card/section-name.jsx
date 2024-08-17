import React, { useEffect, useState } from 'react';
import {
  FormControl, FormLabel, Input,
  FormErrorMessage, FormHelperText,
  VStack,
  Flex,
} from '@chakra-ui/react';
import {
  errorMsg, sectionHelper, townshipHelper, rangeHelper,
  sectionNameHelper, townshipError, rangeError,
  sectionError,
} from '../../../utils/text-utils';

function SectionName({ data, setData }) {
  const sectionNameInput = `${data.section}-${data.township}-${data.range}`;
  const [townshipInvalidity, setTownshipInvalidity] = useState(true);
  const [rangeInvalidity, setRangeInvalidity] = useState(true);

  // Check that township ends in a valid character
  useEffect(() => {
    if (data.township[3] === 'N' || data.township[3] === 'S') {
      setTownshipInvalidity(false);
    } else {
      setTownshipInvalidity(true);
    }
  }, [data.township]);

  // Check that range ends in a valid character
  useEffect(() => {
    if (data.range[3] === 'E' || data.range[3] === 'W') {
      setRangeInvalidity(false);
    } else {
      setRangeInvalidity(true);
    }
  }, [data.range]);

  return (
    <VStack>
      <Flex direction="row" justifyContent="space-between" marginBottom="15px" marginTop="10px" width="100%">
        <FormControl isRequired>
          <FormLabel>Section</FormLabel>
          <Input
            maxLength={3}
            minLength={3}
            type="text"
            value={data.section}
            width="75px"
            onChange={(e) => setData({ ...data, section: (e.target.value).toUpperCase(), sectionName: sectionNameInput })}
          />
          <FormErrorMessage>{sectionError}</FormErrorMessage>
          <FormHelperText fontSize={10}>{sectionHelper}</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Township</FormLabel>
          <Input
            isInvalid={townshipInvalidity}
            maxLength={4}
            minLength={4}
            type="text"
            value={data.township}
            width="95px"
            onChange={(e) => setData({ ...data, township: (e.target.value).toUpperCase(), sectionName: sectionNameInput })}
          />
          <FormErrorMessage>{townshipError}</FormErrorMessage>
          <FormHelperText fontSize={10}>{townshipHelper}</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Range</FormLabel>
          <Input
            isInvalid={rangeInvalidity}
            maxLength={4}
            minLength={4}
            type="text"
            value={data.range}
            width="95px"
            onChange={(e) => setData({ ...data, range: (e.target.value).toUpperCase(), sectionName: sectionNameInput })}
          />
          <FormErrorMessage>{rangeError}</FormErrorMessage>
          <FormHelperText fontSize={10}>{rangeHelper}</FormHelperText>
        </FormControl>
      </Flex>
      <FormControl isRequired>
        <FormLabel>Section Name</FormLabel>
        <Input cursor="no-drop" isDisabled type="text" value={data.sectionName} />
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
        <FormHelperText fontSize={12}>{sectionNameHelper}</FormHelperText>
      </FormControl>
    </VStack>
  );
}

export default SectionName;
