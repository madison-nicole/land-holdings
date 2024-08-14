import React from 'react';
import {
  Box, Flex, Button, HStack,
} from '@chakra-ui/react';
import { SignInButton } from '@clerk/clerk-react';

function NavBar({ onOpen, setAccountStatus }) {
  // if signed in, render a different menu
  function renderMenu() {
    if (authenticated) {
      return (
        <HStack>
          <Button onClick={handleLogOut}>
            Log Out
          </Button>
        </HStack>
      );
    } else {
      return (
        <HStack>
          <SignInButton />
        </HStack>
      );
    }
  }

  return (
    <Box bg="#06253f" color="white" px={4}>
      <Flex alignItems="center" h={16} justifyContent="space-between">
        <Flex alignItems="center" justifyContent="center" width="100%" />
        <Flex alignItems="center" justifyContent="flex-end" width="100%">
          <HStack spacing={3}>
            {renderMenu()}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
