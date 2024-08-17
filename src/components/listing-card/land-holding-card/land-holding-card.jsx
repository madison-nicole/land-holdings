import React from 'react';
import {
  CardBody, FormControl, FormLabel,
  Input, FormErrorMessage, RadioGroup, Radio,
  HStack, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
  VStack,
} from '@chakra-ui/react';
import {
  errorMsg, nameHelper,
} from '../../../utils/text-utils';
import SectionName from './section-name';

function LandHoldingCard({ data, setData }) {
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <CardBody
      alignItems="center"
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      paddingBottom="0px"
    >
      <VStack>
        <form>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            <FormErrorMessage>{errorMsg}</FormErrorMessage>
            <FormHelperText fontSize={12}>{nameHelper}</FormHelperText>
          </FormControl>
          <HStack marginTop="15px">
            <FormControl isRequired>
              <FormLabel>Owner</FormLabel>
              <Input type="text" value={data.ownerName} onChange={(e) => setData({ ...data, ownerName: e.target.value })} />
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Legal Entity</FormLabel>
              <Input type="text" value={data.legalEntity} onChange={(e) => setData({ ...data, legalEntity: e.target.value })} />
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
            </FormControl>
          </HStack>
          <HStack marginBottom="15px" marginTop="15px">
            <FormControl isRequired>
              <FormLabel>Net Mineral Acres</FormLabel>
              <NumberInput min={0} type="number" value={data.mineralAcres} onChange={(e) => setData({ ...data, mineralAcres: Number(e) })}>
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
              <NumberInput max={100} min={0} value={data.royalty} onChange={(e) => setData({ ...data, royalty: Number(e) })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
            </FormControl>
          </HStack>
          <SectionName data={data} setData={setData} />
          <FormControl as="fieldset" isRequired marginTop="20px">
            <FormLabel as="legend">Title Source</FormLabel>
            <RadioGroup defaultValue="ClassA" value={data.titleSource} onChange={(e) => setData({ ...data, titleSource: e })}>
              <HStack spacing="24px">
                <Radio value="A">Class A</Radio>
                <Radio value="B">Class B</Radio>
                <Radio value="C">Class C</Radio>
                <Radio value="D">Class D</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </form>
      </VStack>
    </CardBody>
  );
}

export default LandHoldingCard;
