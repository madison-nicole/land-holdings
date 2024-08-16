import React from 'react';
import {
  CardBody, FormControl, FormLabel,
  Input, FormErrorMessage, RadioGroup, Radio,
  HStack, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
} from '@chakra-ui/react';

const errorMsg = 'This input is required.';

function LandHoldingCard() {
  return (
    <CardBody
      alignItems="center"
      display="flex"
      flexDir="column"
      paddingBottom="0px"
    >
      <form>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
          <FormHelperText>This should be a combination of the Section Name and the Legal Entity.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Owner</FormLabel>
          <Input type="text" />
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Legal Entity</FormLabel>
          <Input type="text" />
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Net Mineral Acres</FormLabel>
          <NumberInput min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Mineral Owner Royalty %</FormLabel>
          <NumberInput max={100} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Section Name</FormLabel>
          <Input type="text" />
          <FormErrorMessage>{errorMsg}</FormErrorMessage>
          <FormHelperText>This should be a combination of Section, Township, and Range in the format Section-Township-Range.</FormHelperText>
        </FormControl>
        {/* insert section
        insert Township
        insert range */}
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">Title Source</FormLabel>
          <RadioGroup defaultValue="ClassA">
            <HStack spacing="24px">
              <Radio value="A">Class A</Radio>
              <Radio value="B">Class B</Radio>
              <Radio value="C">Class C</Radio>
              <Radio value="D">Class D</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </form>
    </CardBody>
  );
}

export default LandHoldingCard;
