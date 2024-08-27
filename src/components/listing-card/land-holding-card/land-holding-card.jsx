import React from 'react';
import {
  CardBody, FormControl, FormLabel,
  Input, FormErrorMessage, RadioGroup, Radio,
  HStack, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText, Select,
  VStack, Button, CardFooter,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import {
  errorMsg, nameHelper,
} from '../../../utils/text-utils';
import SectionName from './section-name';
import { fetchOwners } from '../../../actions';

function LandHoldingCard({
  data, setData, editMode, onSave,
  userId, authToken, onUpdateLand,
}) {
  // Loads data for the owners and land holdings using ReactQuery
  const ownersQuery = useQuery({ queryKey: ['owners', userId], queryFn: fetchOwners(userId, authToken) });
  const owners = ownersQuery?.data;

  function renderOwnerNameOptions() {
    return owners?.map((owner) => {
      const name = owner.ownerName;
      return (
        <option key={name + owner.totalHoldings} value={name}>{name}</option>
      );
    });
  }

  function renderSaveButton() {
    if (editMode) {
      return (
        <Button
          _hover={{ bg: '#a1c1d2' }}
          aria-label="save updated land holding data"
          bg="#bee3f8"
          color="#06253f"
          fontWeight={700}
          type="submit"
          variant="outline"
          onClick={onUpdateLand}
        >UPDATE
        </Button>
      );
    } else {
      return (
        <Button
          _hover={{ bg: '#a1c1d2' }}
          aria-label="save land holding data"
          bg="#bee3f8"
          color="#06253f"
          fontWeight={700}
          type="submit"
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
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      paddingBottom="0px"
    >
      <VStack>
        <form className="entry-form">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            <FormErrorMessage>{errorMsg}</FormErrorMessage>
            <FormHelperText fontSize={12}>{nameHelper}</FormHelperText>
          </FormControl>
          <HStack marginTop="15px">
            <FormControl isRequired>
              <FormLabel>Owner Name</FormLabel>
              <Select
                placeholder="Select Owner"
                onChange={(e) => setData({ ...data, ownerName: e.target.value })}
              >
                {renderOwnerNameOptions()}
              </Select>
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
        <CardFooter>
          {renderSaveButton()}
        </CardFooter>
      </VStack>
    </CardBody>
  );
}

export default LandHoldingCard;
