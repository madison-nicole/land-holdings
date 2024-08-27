import React from 'react';
import {
  CardBody, FormControl, FormLabel,
  Input, FormErrorMessage, RadioGroup, Radio,
  HStack, VStack, NumberInput,
  NumberInputStepper, NumberDecrementStepper,
  NumberIncrementStepper, NumberInputField,
  CardFooter, Button,
} from '@chakra-ui/react';
import { errorMsg } from '../../../utils/text-utils';
import TotalHoldings from './total-holdings';

function OwnerCard({
  data, setData, onSave, onUpdate, editMode, ownerName,
}) {
  function renderSaveButton() {
    if (editMode) {
      return (
        <Button
          _hover={{ bg: '#a1c1d2' }}
          aria-label="save edited owner data"
          bg="#bee3f8"
          color="#06253f"
          fontWeight={700}
          marginTop="38.5px"
          variant="outline"
          onClick={() => onUpdate(ownerName)}
        >UPDATE
        </Button>
      );
    } else {
      return (
        <Button
          _hover={{ bg: '#a1c1d2' }}
          aria-label="save owner data"
          bg="#bee3f8"
          color="#06253f"
          fontWeight={700}
          marginTop="38.5px"
          variant="outline"
          onClick={onSave}
        >SAVE
        </Button>
      );
    }
  }

  return (
    <CardBody
      alignItems="center"
      color="white"
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
          <TotalHoldings data={data} setData={setData} />
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
        <CardFooter>
          {renderSaveButton()}
        </CardFooter>
      </VStack>
    </CardBody>
  );
}

export default OwnerCard;
