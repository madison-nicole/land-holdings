import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Card, CardBody, Heading, CardFooter, Text,
  IconButton, Flex,
} from '@chakra-ui/react';
import {
  ChevronDownIcon, ChevronUpIcon,
  DeleteIcon,
  EditIcon,
} from '@chakra-ui/icons';
import { fetchOwners } from '../actions';
import { alternateCardColor, alternateBgColor } from '../utils/style-utils';
import OwnersSkeleton from './owners-skeleton';
import OwnerFields from './owner-fields';

function Owners({
  userId, authToken, onDelete, onEdit,
}) {
  const [expanded, setExpanded] = useState(null);

  // Loads data for the owners and land holdings using ReactQuery
  const ownersQuery = useQuery({ queryKey: ['owners', userId], queryFn: fetchOwners(userId, authToken) });
  const { isLoading, isError, data } = ownersQuery;

  function toggleExpandOwner(idx) {
    // Switch the expanded mode
    if (!expanded) {
      setExpanded(idx + 1);
    } else {
      setExpanded(null);
    }
  }

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

  function renderOwners() {
    const renderedOwners = data?.map((owner, idx) => {
      return (
        <Card
          bg={alternateBgColor(idx)}
          border="solid"
          borderRadius={6}
          color="#06253f"
          direction={{ base: 'column', sm: 'row' }}
          key={owner.ownerName}
          mb="4px"
          ml={40}
          mr={40}
          overflow="hidden"
          variant={alternateCardColor(idx)}
          width="600px"
        >
          <IconButton
            aria-label="Display owner information"
            color="#06253f"
            icon={expanded === idx + 1 ? <ChevronUpIcon /> : <ChevronDownIcon />}
            margin={2}
            marginRight="10px"
            padding={0}
            size="md"
            variant="link"
            onClick={() => toggleExpandOwner(idx)}
          />

          <CardBody
            display="flex"
            flexDirection="row"
            padding="0px"
          >
            <Flex direction="column" justifyContent="center">
              <Heading
                alignItems="center"
                cursor="pointer"
                display="flex"
                fontSize={15}
                fontWeight="600"
                mb="15px"
                mt="15px"
                width="100%"
              >
                {owner.ownerName}
              </Heading>
              <Flex
                direction="column"
                display={expanded === idx + 1 ? 'flex' : 'none'}
                marginBottom="15px"
                marginTop="15px"
              >
                <OwnerFields owner={owner} />
              </Flex>
            </Flex>
          </CardBody>
          <CardFooter
            alignItems="center"
            display="flex"
            justifyContent="flex-end"
            mr="20px"
          >
            <IconButton
              aria-label="Edit owner information"
              color="#06253f"
              icon={<EditIcon />}
              margin={2}
              size="sm"
              variant="ghost"
              onClick={() => onEdit(owner.ownerName)}
            />
            <IconButton
              aria-label="Delete owner information"
              color="#06253f"
              icon={<DeleteIcon />}
              margin={2}
              size="sm"
              variant="ghost"
              onClick={() => onDelete(owner.ownerName)}
            />
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
