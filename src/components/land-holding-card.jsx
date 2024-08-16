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
  errorMsg, sectionNameHelper, sectionHelper,
  townshipHelper, rangeHelper, nameHelper,
} from '../utils/text-utils';

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
          <FormControl isRequired>
            <FormLabel>Section Name</FormLabel>
            <Input type="text" value={data.sectionName} onChange={(e) => setData({ ...data, sectionName: e.target.value })} />
            <FormErrorMessage>{errorMsg}</FormErrorMessage>
            <FormHelperText fontSize={12}>{sectionNameHelper}</FormHelperText>
          </FormControl>
          <HStack marginBottom="15px" marginTop="15px">
            <FormControl isRequired>
              <FormLabel>Section</FormLabel>
              <Input maxLength={3} minLength={3} type="text" value={data.section} width="75px" onChange={(e) => setData({ ...data, section: e.target.value })} />
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
              <FormHelperText fontSize={10}>{sectionHelper}</FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Township</FormLabel>
              <Input maxLength={4} minLength={4} type="text" value={data.township} width="75px" onChange={(e) => setData({ ...data, township: e.target.value })} />
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
              <FormHelperText fontSize={10}>{townshipHelper}</FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Range</FormLabel>
              <Input maxLength={4} minLength={4} type="text" value={data.range} width="75px" onChange={(e) => setData({ ...data, range: e.target.value })} />
              <FormErrorMessage>{errorMsg}</FormErrorMessage>
              <FormHelperText fontSize={10}>{rangeHelper}</FormHelperText>
            </FormControl>
            {/* Township ends in N or S
        Range ends in E or W */}
          </HStack>
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
