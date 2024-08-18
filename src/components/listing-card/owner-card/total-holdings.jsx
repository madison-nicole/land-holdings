import React from 'react';
import {
  HStack, FormControl, FormLabel,
  NumberInput, NumberInputField, NumberIncrementStepper,
  NumberDecrementStepper, NumberInputStepper,
  FormErrorMessage,
} from '@chakra-ui/react';
import { errorMsg } from '../../../utils/text-utils';

function TotalHoldings({ data, setData }) {
  const holdingsSum = data.classA + data.classB + data.classC + data.classD;

  return (
    <HStack marginTop="25px">
      <FormControl isRequired>
        <FormLabel>Total Holdings</FormLabel>
        <NumberInput cursor="no-drop" isDisabled min={0} value={data.totalHoldings} width="150px" onChange={(e) => setData({ ...data, totalHoldings: Number(e) })}>
          <NumberInputField />
        </NumberInput>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Class A</FormLabel>
        <NumberInput min={0} value={data.classA} width="100px" onChange={(e) => setData({ ...data, classA: Number(e), totalHoldings: holdingsSum })}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Class B</FormLabel>
        <NumberInput min={0} value={data.classB} width="100px" onChange={(e) => setData({ ...data, classB: Number(e), totalHoldings: holdingsSum })}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Class C</FormLabel>
        <NumberInput min={0} value={data.classC} width="100px" onChange={(e) => setData({ ...data, classC: Number(e), totalHoldings: holdingsSum })}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Class D</FormLabel>
        <NumberInput min={0} value={data.classD} width="100px" onChange={(e) => setData({ ...data, classD: Number(e), totalHoldings: holdingsSum })}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>
    </HStack>
  );
}

export default TotalHoldings;
