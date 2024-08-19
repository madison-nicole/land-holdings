import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Card, CardBody, Heading, CardFooter, Text,
} from '@chakra-ui/react';
import { fetchOwners } from '../actions';
import alternateCardColor from '../utils/style-utils';

function Owners({ userId }) {
  // Loads data for the owners and land holdings using ReactQuery
  const ownersQuery = useQuery({ queryKey: ['owners', userId], queryFn: fetchOwners(userId) });
  const owners = ownersQuery?.data;

  console.log('owners from reactquery', owners);

  if (!owners) {
    return (
      <Text color="#06253f" fontSize="18px" textAlign="center">
        Click the add button to start adding owners!
      </Text>
    );
  }

  function renderOwners() {
    const renderedOwners = owners?.map((owner, idx) => {
      return (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          key={owner.ownerName}
          ml={40}
          mr={40}
          overflow="hidden"
          variant={alternateCardColor(idx)}
        >
          <CardBody
            display="flex"
            flexDirection="row"
            padding="0px"
          >
            <Heading
              alignItems="center"
              cursor="pointer"
              display="flex"
              fontSize={18}
              fontWeight="700"
              width="100%"
            >
              {owner.ownerName}
            </Heading>
          </CardBody>
          <CardFooter
            alignItems="center"
            display="flex"
            justifyContent="flex-end"
            mr="20px"
          >
            {/* insert edit button
            insert delete button */}
          </CardFooter>
        </Card>
      );
    });

    return renderedOwners;
  }

  return (
    <div>
      {renderOwners()}
    </div>
  );
}

export default Owners;
