import React from 'react';
import { HStack } from '@chakra-ui/react';
import OwnerField from './owner-field';

function OwnerFields({ owner }) {
  return (
    <>
      <OwnerField field="Entity Type: " info={owner.entityType} />
      <OwnerField field="Owner Type: " info={owner.ownerType} />
      <OwnerField field="Address: " info={owner.address} />
      <OwnerField field="Total Number of Holdings: " info={owner.totalHoldings} />
      <HStack>
        <OwnerField field="Class A Holdings:" info={owner.classA} />
        <OwnerField field="Class B Holdings:" info={owner.classB} />
        <OwnerField field="Class C Holdings:" info={owner.classC} />
        <OwnerField field="Class D Holdings:" info={owner.classD} />
      </HStack>
      <OwnerField field="Unique Legal Entities: " info={owner.legalEntities} />
      <OwnerField field="Total Net Mineral Acres: " info={owner.mineralAcres} />
    </>
  );
}

export default OwnerFields;
