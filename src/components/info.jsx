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
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Owners from './owners';
import LandHoldings from './land-holdings';
import JumpToTop from './jump-to-top';
import ListingCard from './listing-card/listing-card';
import {
  deleteOwner, fetchOwner, updateOwner, deleteLandHolding,
  fetchLandHolding,
  updateLandHolding,
  fetchOwners,
} from '../actions';
import {
  errorDeleteToast, errorFetchOwnerToast, successDeleteToast,
  errorUpdateOwnerToast, successUpdateOwnerToast,
  successDeleteLandToast,
  errorDeleteLandToast,
  errorFetchLandToast,
  successUpdateLandToast,
  errorUpdateLandToast,
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
  const [modalTabIndex, setModalTabIndex] = useState(0);
  const queryClient = useQueryClient();

  useEffect(() => {
    async function returnToken() {
      const token = await getToken();
      return token;
    }

    setAuthToken(returnToken());
  }, [getToken]);

  // Loads data for the owners and land holdings using ReactQuery
  const ownersQuery = useQuery({ queryKey: ['owners', userId], queryFn: fetchOwners(userId, authToken) });

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
    setModalTabIndex(0);
  }, [onClose]);

  // Delete an owner entry
  const onDeleteOwner = useCallback(async (ownerName) => {
    // Get auth token
    const token = await getToken();

    // Delete the owner listing
    const deletedOwner = await dispatch(deleteOwner(userId, ownerName, token));
    queryClient.invalidateQueries({ queryKey: ['owners', userId] });

    // Display success toast
    if (deletedOwner) {
      toast(successDeleteToast);
    } else {
      // Display an error toast
      toast(errorDeleteToast);
    }
  }, [getToken, dispatch, userId, queryClient, toast]);

  // Delete a land holding
  const onDeleteLand = useCallback(async (ownerName, landName) => {
    // Get auth token
    const token = await getToken();

    const deletedLand = await dispatch(deleteLandHolding(userId, ownerName, landName, token));
    queryClient.invalidateQueries({ queryKey: ['owners', userId] });

    // Display success toast
    if (deletedLand) {
      toast(successDeleteLandToast);
    } else {
      // Display an error toast
      toast(errorDeleteLandToast);
    }
  }, [getToken, dispatch, userId, queryClient, toast]);

  // Edit an owner entry
  const onEditOwner = useCallback(async (ownerName) => {
    setEditMode(true);
    setEditOwnerName(ownerName);

    // Get auth token
    const token = await getToken();

    // Get owner data
    const fetchedOwnerData = await dispatch(fetchOwner(userId, ownerName, token));
    queryClient.invalidateQueries({ queryKey: ['owners', userId] });

    // If fetch owner fails
    if (!fetchedOwnerData) {
      toast(errorFetchOwnerToast);
    } else {
      // Set owner data to current
      setOwnerData(fetchedOwnerData);
      // Set to correct tab
      setModalTabIndex(0);
      // Open listing card with owner info
      openListingCard();
    }
  }, [getToken, dispatch, userId, queryClient, toast, openListingCard]);

  // Edit an owner entry
  const onEditLand = useCallback(async (ownerName, landName) => {
    setEditMode(true);
    setEditOwnerName(ownerName);

    // Get auth token
    const token = await getToken();

    // Get owner data
    const fetchedLandData = await dispatch(fetchLandHolding(userId, ownerName, landName, token));
    queryClient.invalidateQueries({ queryKey: ['owners', userId] });

    // If fetch owner fails
    if (!fetchedLandData) {
      toast(errorFetchLandToast);
    } else {
      // Set land data to current
      setLandData(fetchedLandData);
      // Set to correct tab
      setModalTabIndex(1);
      // Open listing card with owner info
      openListingCard();
    }
  }, [getToken, dispatch, userId, queryClient, toast, openListingCard]);

  // Save an edited owner entry
  const onUpdateOwner = useCallback(async (ownerName) => {
    // Get auth token
    const token = await getToken();

    // Save the owner listing
    const updatedOwner = await dispatch(updateOwner(userId, ownerName, ownerData, token));
    queryClient.invalidateQueries({ queryKey: ['owners', userId] });

    // Display success toast
    if (updatedOwner) {
      toast(successUpdateOwnerToast);
    } else {
      // Display an error toast
      toast(errorUpdateOwnerToast);
    }

    // Close the listing card and clear the data
    onCloseListing();
  }, [dispatch, getToken, onCloseListing, ownerData, queryClient, toast, userId]);

  // Save an edited land holding entry
  const onUpdateLand = useCallback(async () => {
    // Get auth token
    const token = await getToken();

    const { ownerName, name } = landData;

    // Save the land holding
    const updatedLand = await dispatch(updateLandHolding(userId, ownerName, name, landData, token));
    queryClient.invalidateQueries({ queryKey: ['owners', userId] });

    // Display success toast
    if (updatedLand) {
      toast(successUpdateLandToast);
    } else {
      // Display an error toast
      toast(errorUpdateLandToast);
    }

    // Close the listing card and clear the data
    onCloseListing();
  }, [dispatch, getToken, landData, onCloseListing, queryClient, toast, userId]);

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
        ownersQuery={ownersQuery}
        setLandData={setLandData}
        setOwnerData={setOwnerData}
        setTabIndex={setModalTabIndex}
        tabIndex={modalTabIndex}
        userId={userId}
        onCloseListing={onCloseListing}
        onUpdateLand={onUpdateLand}
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
            <LandHoldings
              authToken={authToken}
              userId={userId}
              onDeleteLand={onDeleteLand}
              onDeleteOwner={onDeleteOwner}
              onEditLand={onEditLand}
              onEditOwner={onEditOwner}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <JumpToTop />
    </Flex>
  );
}

export default Info;
