/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Flex, Heading, HStack, IconButton,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import OwnerField from './owner-field';

function LandHoldingFields({
  land, onDelete, userId, ownerName, authToken,
}) {
//   const landQuery = useQuery({ queryKey: ['land', userId, ownerName], queryFn: fetchOwnersLandHoldings(userId, ownerName, authToken) });
//   const ownersLand = landQuery?.data;

  if (!land) {
    return null;
  }

  const landArray = Object.values(land);

  function renderLandHoldings() {
    return landArray?.map((landHolding, idx) => {
      return (
        <Flex bgColor="#bee3f8"
          border="solid"
          borderColor="#06253f"
          borderRadius={8}
          direction="column"
          key={landHolding.name + idx + landHolding.sectionName}
          mb="10px"
          padding="10px"

        >
          <Flex alignItems="space-between" direction="row" justifyContent="center" width="575px">
            <Heading
              alignItems="center"
              cursor="pointer"
              display="flex"
              fontSize={13}
              fontWeight="700"
              width="100%"
            >
              NAME: {landHolding.name}
            </Heading>
            <IconButton
              aria-label="Edit owner information"
              color="#06253f"
              icon={<EditIcon />}
              margin={0}
              size="xs"
              variant="ghost"
            //   onClick={() => onEditOwner(owner.ownerName)}
            />
            <IconButton
              aria-label="Delete owner information"
              color="#06253f"
              icon={<DeleteIcon />}
              margin={0}
              size="xs"
              variant="ghost"
              onClick={() => onDelete(landHolding.ownerName, landHolding.name)}
            />
          </Flex>
          <OwnerField field="Owner Name: " info={landHolding.ownerName} />
          <OwnerField field="Legal Entity: " info={landHolding.legalEntity} />
          <OwnerField field="Net Mineral Acres: " info={landHolding.mineralAcres} />
          <OwnerField field="Mineral Owner Royalty (%): " info={landHolding.royalty} />
          <OwnerField field="Section Name: " info={landHolding.sectionName} />
          <HStack>
            <OwnerField field="Section:" info={landHolding.section} />
            <OwnerField field="Township:" info={landHolding.township} />
            <OwnerField field="Range:" info={landHolding.range} />
          </HStack>
          <OwnerField field="Title Source: " info={landHolding.titleSource} />
        </Flex>
      );
    });
  }

  return (
    <>
      {renderLandHoldings()}
    </>
  );
}

export default LandHoldingFields;
