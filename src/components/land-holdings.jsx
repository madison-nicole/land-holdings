import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Text, Card, CardBody, Flex, Heading,
  HStack, IconButton,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { fetchOwners } from '../actions';
import OwnerField from './owner-field';

function LandHoldings({
  userId, authToken, onEditOwner, onDeleteOwner,
}) {
  // Loads data for the owners and land holdings using ReactQuery
  const ownersQuery = useQuery({ queryKey: ['owners', userId], queryFn: fetchOwners(userId, authToken) });
  const { isLoading, isError, data } = ownersQuery;

  if (isLoading) {
    // return <OwnersSkeleton />;
  }

  if (!isLoading && !data) {
    return (
      <Text color="#06253f" fontSize="18px" textAlign="center">
        Click the add button to start adding owners!
      </Text>
    );
  }

  if (isError) {
    return (
      <Text color="#06253f" fontSize="18px" textAlign="center">
        There has been an error in fetching the data.
      </Text>
    );
  }

  function renderData() {
    const renderedData = data?.map((owner, idx) => {
      return (
        <Card
          bg="white"
          border="solid"
          borderRadius={6}
          color="#06253f"
          direction={{ base: 'column', sm: 'row' }}
          key={owner.ownerName}
          mb="4px"
          ml={40}
          mr={40}
          overflow="hidden"
          width="600px"
        >
          <CardBody
            display="flex"
            flexDirection="row"
            marginLeft="20px"
            padding="0px"
          >
            <Flex direction="column">
              <Flex alignItems="space-between" direction="row" justifyContent="center" width="575px">
                <Heading
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  fontSize={15}
                  fontWeight="700"
                  mb="15px"
                  mt="15px"
                  width="100%"
                >
                  OWNER: {owner.ownerName}
                </Heading>
                <IconButton
                  aria-label="Edit owner information"
                  color="#06253f"
                  icon={<EditIcon />}
                  margin={2}
                  size="sm"
                  variant="ghost"
                  onClick={() => onEditOwner(owner.ownerName)}
                />
                <IconButton
                  aria-label="Delete owner information"
                  color="#06253f"
                  icon={<DeleteIcon />}
                  margin={2}
                  size="sm"
                  variant="ghost"
                  onClick={() => onDeleteOwner(owner.ownerName)}
                />
              </Flex>
              <Flex
                direction="column"
                marginBottom="15px"
                marginTop="15px"
              >
                <OwnerField field="Entity Type: " info={owner.entityType} />
                <OwnerField field="Owner Type: " info={owner.ownerType} />
                <OwnerField field="Address: " info={owner.address} />
                <OwnerField field="Total Holdings: " info={owner.totalHoldings} />
                <HStack>
                  <OwnerField field="Class A:" info={owner.classA} />
                  <OwnerField field="Class B:" info={owner.classB} />
                  <OwnerField field="Class C:" info={owner.classC} />
                  <OwnerField field="Class D:" info={owner.classD} />
                </HStack>
                <OwnerField field="Unique Legal Entities: " info={owner.legalEntities} />
                <OwnerField field="Total Net Mineral Acres: " info={owner.mineralAcres} />
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      );
    });

    return renderedData;
  }

  return (
    <div>
      {renderData()}
    </div>
  );
}

export default LandHoldings;
