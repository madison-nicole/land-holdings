import React from 'react';
import {
  CardBody, FormControl, FormLabel,
  Input, FormErrorMessage, RadioGroup, Radio,
  HStack, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const errorMsg = 'This input is required.';

function OwnerCard() {
  return (
    <CardBody
      alignItems="center"
      display="flex"
      flexDir="column"
      paddingBottom="0px"
    >
      <form>
        <FormControl isRequired>
          <FormLabel>Owner Name</FormLabel>
          <Input type="text" />
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Entity Type</FormLabel>
          <RadioGroup defaultValue="Company">
            <HStack spacing="24px">
              <Radio value="Company">Company</Radio>
              <Radio value="Individual">Individual</Radio>
              <Radio value="Investor">Investor</Radio>
              <Radio value="Trust">Trust</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Owner Type</FormLabel>
          <RadioGroup defaultValue="Competitor">
            <HStack spacing="24px">
              <Radio value="Competitor">Competitor</Radio>
              <Radio value="Seller">Seller</Radio>
              <Radio value="Investor">Investor</Radio>
              <Radio value="Professional">Professional</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Address</FormLabel>
          <Input type="text" />
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Total Holdings</FormLabel>
          <NumberInput min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
        </FormControl>
      </form>
    </CardBody>
  );
}

export default OwnerCard;
