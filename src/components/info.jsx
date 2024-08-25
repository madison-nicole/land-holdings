import React, { useCallback, useState, useEffect } from 'react';
import {
  Tabs, TabList, TabPanel, TabPanels,
  Tab, Flex, Button,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useUser, useAuth } from '@clerk/clerk-react';
import { useDispatch } from 'react-redux';
import Owners from './owners';
import LandHoldings from './land-holdings';
import JumpToTop from './jump-to-top';
import ListingCard from './listing-card/listing-card';
import { deleteOwner } from '../actions';
import { errorDeleteToast, successDeleteToast } from '../utils/toast-utils';

function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userInfo = useUser();
  const userId = userInfo.user.id.substring(5);
  const { getToken } = useAuth();
  const [authToken, setAuthToken] = useState('');
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    async function returnToken() {
      const token = await getToken();
      return token;
    }

    setAuthToken(returnToken());
  }, [getToken]);

  const openListingCard = useCallback(async () => {
    onOpen();
  }, [onOpen]);

  // Delete an owner entry
  const onDeleteOwner = useCallback(async (ownerName) => {
    // Get auth token
    const token = await getToken();

    // Save the owner listing
    const deletedOwner = await dispatch(deleteOwner(userId, ownerName, token));

    // Display success toast
    if (deletedOwner) {
      toast(successDeleteToast);
    } else {
      // Display an error toast
      toast(errorDeleteToast);
    }
  }, [getToken, dispatch, userId, toast]);

  return (
    <Flex alignItems="center" direction="column">
      <div>
        <Button
          _hover={{ bg: '#a1c1d2' }}
          bg="#bee3f8"
          color="#06253f"
          fontWeight={700}
          mb="20px"
          mt="50px"
          rightIcon={<AddIcon />}
          variant="outline"
          onClick={openListingCard}
        >ADD
        </Button>
      </div>
      <ListingCard getToken={getToken} isOpen={isOpen} userId={userId} onClose={onClose} />
      <Tabs colorScheme="blue" variant="soft-rounded">
        <TabList display="flex" justifyContent="center" margin={10}>
          <Tab cursor="pointer" fontSize={13.5} fontWeight={700}>Owners</Tab>
          <Tab cursor="pointer" fontSize={13.5} fontWeight={700}>Land Holdings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Owners authToken={authToken} userId={userId} onDelete={onDeleteOwner} />
          </TabPanel>
          <TabPanel>
            <LandHoldings getToken={getToken} userId={userId} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <JumpToTop />
    </Flex>
  );
}

export default Info;
