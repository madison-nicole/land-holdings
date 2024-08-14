import React, { useCallback } from 'react';
import {
  Box, Flex, Button, HStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { SignInButton } from '@clerk/clerk-react';
import useAuthenticated from '../hooks/auth-hooks';
import { signoutUser } from '../actions';

function NavBar({ onOpen, setAccountStatus }) {
  const authenticated = useAuthenticated();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // button functions
  const handleLogOut = useCallback(() => {
    dispatch(signoutUser(navigate));
    navigate('/');
  }, [dispatch, navigate]);

  const handleSignUp = useCallback(() => {
    setAccountStatus(false);
    onOpen();
  }, [onOpen, setAccountStatus]);

  // const handleLogIn = useCallback(() => {
  //   setAccountStatus(true);
  //   onOpen();
  // }, [onOpen, setAccountStatus]);

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
          <Button onClick={handleSignUp}>
            Sign Up
          </Button>
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
