import React, { useEffect } from 'react';
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
import { isRangeInvalid, isTownshipInvalid } from '../../../utils/listing-utils';

function SectionName({ data, setData }) {
  useEffect(() => {
    setData({ ...data, sectionName: `${data.section}-${data.township}-${data.range}` });
  }, [data, setData]);

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
            onChange={(e) => setData({ ...data, section: (e.target.value).toUpperCase() })}
          />
          <FormErrorMessage>{sectionError}</FormErrorMessage>
          <FormHelperText fontSize={10}>{sectionHelper}</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Township</FormLabel>
          <Input
            isInvalid={() => isTownshipInvalid(data.township)}
            maxLength={4}
            minLength={4}
            type="text"
            value={data.township}
            width="85px"
            onChange={(e) => setData({ ...data, township: (e.target.value).toUpperCase() })}
          />
          <FormErrorMessage>{townshipError}</FormErrorMessage>
          <FormHelperText fontSize={10}>{townshipHelper}</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Range</FormLabel>
          <Input
            isInvalid={() => isRangeInvalid(data.range)}
            maxLength={4}
            minLength={4}
            type="text"
            value={data.range}
            width="85px"
            onChange={(e) => setData({ ...data, range: (e.target.value).toUpperCase() })}
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
