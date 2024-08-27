import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

function DeleteAllButton() {
  return (
    <Flex justifyContent="center">
      <Button
        _hover={{ bg: '#ff3e22' }}
        bg="#da2e15"
        color="white"
        fontWeight={700}
        mb="20px"
        mt="100px"
        variant="outline"
        // onClick={openListingCard}
      >DELETE ALL
      </Button>
    </Flex>
  );
}

export default DeleteAllButton;
