import React from 'react';
import {
  CardBody, FormControl, FormLabel,
  Input, FormErrorMessage, RadioGroup, Radio,
  HStack, VStack, NumberInput,
  NumberInputStepper, NumberDecrementStepper,
  NumberIncrementStepper, NumberInputField,
} from '@chakra-ui/react';
import { errorMsg } from '../../../utils/text-utils';

function OwnerCard({ data, setData, setValid }) {
  return (
    <CardBody
      alignItems="center"
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      paddingBottom="0px"
    >
      <VStack width="90%">
        <form className="entry-form">
          <FormControl isRequired>
            <FormLabel>Owner Name</FormLabel>
            <Input type="text" value={data.ownerName} onChange={(e) => setData({ ...data, ownerName: e.target.value })} />
            <FormErrorMessage>{errorMsg}</FormErrorMessage>
          </FormControl>
          <FormControl as="fieldset" isRequired marginTop="25px">
            <FormLabel as="legend">Entity Type</FormLabel>
            <RadioGroup value={data.entityType} onChange={(e) => setData({ ...data, entityType: e })}>
              <HStack spacing="24px">
                <Radio value="Company">Company</Radio>
                <Radio value="Individual">Individual</Radio>
                <Radio value="Investor">Investor</Radio>
                <Radio value="Trust">Trust</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl as="fieldset" isRequired marginTop="25px">
            <FormLabel as="legend">Owner Type</FormLabel>
            <RadioGroup value={data.ownerType} onChange={(e) => setData({ ...data, ownerType: e })}>
              <HStack spacing="24px">
                <Radio value="Competitor">Competitor</Radio>
                <Radio value="Seller">Seller</Radio>
                <Radio value="Investor">Investor</Radio>
                <Radio value="Professional">Professional</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl isRequired marginTop="25px">
            <FormLabel>Address</FormLabel>
            <Input type="text" value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
            <FormErrorMessage>{errorMsg}</FormErrorMessage>
          </FormControl>
          <HStack marginTop="25px">
            <FormControl isRequired>
              <FormLabel>Total Holdings</FormLabel>
              <NumberInput min={0} value={data.totalHoldings} width="150px" onChange={(e) => setData({ ...data, totalHoldings: Number(e) })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Class A</FormLabel>
              <NumberInput min={0} value={data.classA} width="100px" onChange={(e) => setData({ ...data, classA: Number(e) })}>
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
              <NumberInput min={0} value={data.classB} width="100px" onChange={(e) => setData({ ...data, classB: Number(e) })}>
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
              <NumberInput min={0} value={data.classC} width="100px" onChange={(e) => setData({ ...data, classC: Number(e) })}>
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
              <NumberInput min={0} value={data.classD} width="100px" onChange={(e) => setData({ ...data, classD: Number(e) })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
            </FormControl>
          </HStack>
          <HStack marginBottom="20px" marginTop="25px">
            <FormControl isRequired>
              <FormLabel>Unique Legal Entities</FormLabel>
              <NumberInput min={0} value={data.legalEntities} width="100px" onChange={(e) => setData({ ...data, legalEntities: Number(e) })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Total Net Mineral Acres</FormLabel>
              <NumberInput min={0} value={data.mineralAcres} width="100px" onChange={(e) => setData({ ...data, mineralAcres: Number(e) })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
            </FormControl>
          </HStack>
        </form>
      </VStack>
    </CardBody>
  );
}

export default OwnerCard;
