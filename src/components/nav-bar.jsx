import React from 'react';
import {
  Box, Flex, HStack,
} from '@chakra-ui/react';
import {
  SignedIn, SignedOut, SignUpButton, SignOutButton,
} from '@clerk/clerk-react';

function NavBar() {
  // if signed in, render a different menu
  function renderMenu() {
    return (
      <HStack>
        <SignedIn>
          <SignOutButton
            appearance={{
              elements: {
                formButtonPrimary: {
                  fontSize: 14,
                  textTransform: 'none',
                  backgroundColor: '#06253f',
                  '&:hover, &:focus, &:active': {
                    backgroundColor: '#bee3f8',
                  },
                },
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignUpButton
            appearance={{
              elements: {
                formButtonPrimary: {
                  fontSize: 14,
                  textTransform: 'none',
                  backgroundColor: '#06253f',
                  '&:hover, &:focus, &:active': {
                    backgroundColor: '#bee3f8',
                  },
                },
              },
            }}
          />
        </SignedOut>
      </HStack>
    );
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
