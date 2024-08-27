import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Text, Card, CardBody, Flex, Heading,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { fetchOwners } from '../actions';
import OwnerFields from './owner-fields';
import LandHoldingFields from './land-holding-fields';
import OwnersSkeleton from './owners-skeleton';

function LandHoldings({
  userId, authToken, onEditOwner, onDeleteOwner,
  onDeleteLand, onEditLand, onUpdateLand,
}) {
  // Loads data for the owners and land holdings using ReactQuery
  const ownersQuery = useQuery({ queryKey: ['owners', userId], queryFn: fetchOwners(userId, authToken) });
  const { isLoading, isError, data } = ownersQuery;

  if (isLoading) {
    return <OwnersSkeleton />;
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
          mb="10px"
          ml={40}
          mr={40}
          overflow="hidden"
          width="623px"
        >
          <CardBody
            display="flex"
            flexDirection="row"
            padding="10px"
          >
            <Flex direction="column">
              <Flex alignItems="space-between" direction="row" justifyContent="center" width="575px">
                <Heading
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  fontSize={16}
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
                <OwnerFields owner={owner} />
              </Flex>
              <Heading
                alignItems="center"
                cursor="pointer"
                display="flex"
                fontSize={15}
                fontWeight="700"
                width="100%"
              >
                LAND HOLDINGS
              </Heading>
              <Flex
                direction="column"
                marginBottom="15px"
                marginTop="15px"
              >
                <LandHoldingFields authToken={authToken}
                  land={owner.landHoldings}
                  ownerName={owner.ownerName}
                  userId={userId}
                  onDelete={onDeleteLand}
                  onEdit={onEditLand}
                  onUpdate={onUpdateLand}
                />
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
