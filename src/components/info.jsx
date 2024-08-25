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
import { deleteOwner, fetchOwner, updateOwner } from '../actions';
import {
  errorDeleteToast, errorFetchOwnerToast, successDeleteToast,
  errorUpdateOwnerToast, successUpdateOwnerToast,
} from '../utils/toast-utils';
import { emptyOwnerData, emptyLandData } from '../utils/listing-utils';

function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userInfo = useUser();
  const userId = userInfo.user.id.substring(5);
  const { getToken } = useAuth();
  const dispatch = useDispatch();
  const toast = useToast();

  const [authToken, setAuthToken] = useState('');
  const [ownerData, setOwnerData] = useState(emptyOwnerData);
  const [landData, setLandData] = useState(emptyLandData);
  const [editMode, setEditMode] = useState(false);
  const [editOwnerName, setEditOwnerName] = useState('');

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

  const onCloseListing = useCallback(() => {
    // Close the modal
    onClose();

    // Clear the fields
    setOwnerData(emptyOwnerData);
    setLandData(emptyLandData);
    setEditMode(false);
    setEditOwnerName('');
  }, [onClose]);

  // Delete an owner entry
  const onDeleteOwner = useCallback(async (ownerName) => {
    // Get auth token
    const token = await getToken();

    // Delete the owner listing
    const deletedOwner = await dispatch(deleteOwner(userId, ownerName, token));

    // Display success toast
    if (deletedOwner) {
      toast(successDeleteToast);
    } else {
      // Display an error toast
      toast(errorDeleteToast);
    }
  }, [getToken, dispatch, userId, toast]);

  // Edit an owner entry
  const onEditOwner = useCallback(async (ownerName) => {
    setEditMode(true);
    setEditOwnerName(ownerName);

    // Get auth token
    const token = await getToken();

    // Get owner data
    const fetchedOwnerData = await dispatch(fetchOwner(userId, ownerName, token));

    // If fetch owner fails
    if (!fetchedOwnerData) {
      toast(errorFetchOwnerToast);
    } else {
      // Set owner data to current
      setOwnerData(fetchedOwnerData);

      // Open listing card with owner info
      openListingCard();
    }
  }, [getToken, dispatch, userId, toast, openListingCard]);

  // Save an edited owner entry
  const onUpdateOwner = useCallback(async (ownerName) => {
    // Get auth token
    const token = await getToken();

    // Save the owner listing
    const updatedOwner = await dispatch(updateOwner(userId, ownerName, ownerData, token));

    // Display success toast
    if (updatedOwner) {
      console.log('updatedOwner', updatedOwner);
      toast(successUpdateOwnerToast);
    } else {
      // Display an error toast
      toast(errorUpdateOwnerToast);
    }

    // Close the listing card and clear the data
    onCloseListing();
  }, [dispatch, getToken, onCloseListing, ownerData, toast, userId]);

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
      <ListingCard
        authToken={authToken}
        editMode={editMode}
        getToken={getToken}
        isOpen={isOpen}
        landData={landData}
        ownerData={ownerData}
        ownerName={editOwnerName}
        setLandData={setLandData}
        setOwnerData={setOwnerData}
        userId={userId}
        onCloseListing={onCloseListing}
        onUpdateOwner={onUpdateOwner}
      />
      <Tabs colorScheme="blue" variant="soft-rounded">
        <TabList display="flex" justifyContent="center" margin={10}>
          <Tab cursor="pointer" fontSize={13.5} fontWeight={700}>Owners</Tab>
          <Tab cursor="pointer" fontSize={13.5} fontWeight={700}>Land Holdings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Owners authToken={authToken} userId={userId} onDelete={onDeleteOwner} onEdit={onEditOwner} />
          </TabPanel>
          <TabPanel>
            <LandHoldings authToken={authToken} userId={userId} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <JumpToTop />
    </Flex>
  );
}

export default Info;
