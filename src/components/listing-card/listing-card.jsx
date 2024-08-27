import React, { useRef, useCallback } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalBody, Card,
  ModalCloseButton, Tabs, TabList,
  TabPanel, Tab, TabPanels, Flex,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import OwnerCard from './owner-card/owner-card';
import LandHoldingCard from './land-holding-card/land-holding-card';
import {
  successAddOwnerToast, errorFormToast, errorAddOwnerToast, successAddLandToast, errorAddLandToast,
} from '../../utils/toast-utils';
import { addLandHolding, addOwner } from '../../actions';

function ListingCard({
  onCloseListing, isOpen, userId, getToken, editMode, authToken,
  ownerData, landData, setOwnerData, setLandData, onUpdateOwner, ownerName,
  tabIndex, setTabIndex, onUpdateLand,
}) {
  const finalRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const queryClient = useQueryClient;
  const validForm = true;

  // Save the owner entry
  const saveOwnerData = useCallback(async () => {
    // Check that all field requirements are met
    if (validForm) {
      const token = await getToken();

      // Save the owner listing
      const owner = await dispatch(addOwner(userId, ownerData, token));

      // Close the modal and clear the data
      onCloseListing();

      if (owner) {
        // Display success toast
        toast(successAddOwnerToast);
        queryClient.invalidateQueries({ queryKey: ['owners', userId] });
      } else {
        // Display an error toast if form was valid but save failed
        toast(errorAddOwnerToast);
      }
    } else {
      // Display an error toast if form invalid
      toast(errorFormToast);
    }
  }, [validForm, getToken, dispatch, userId, ownerData, queryClient, onCloseListing, toast]);

  // Save the owner entry
  const saveLandData = useCallback(async () => {
    const token = await getToken();

    // Save the owner listing
    const land = await dispatch(addLandHolding(userId, landData, token));

    if (land) {
      // Close the modal and clear the data, display success toast
      onCloseListing();
      toast(successAddLandToast);
      queryClient.invalidateQueries({ queryKey: ['owners', userId] });
    } else {
      // Display an error toast if form was valid but save failed
      onCloseListing();
      toast(errorAddLandToast);
    }
  }, [getToken, dispatch, userId, landData, queryClient, onCloseListing, toast]);

  return (
    <div>
      <Modal blockScrollOnMount={false}
        finalFocusRef={finalRef}
        isCentered
        isOpen={isOpen}
        onClose={onCloseListing}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding="0px" width="654px">
            <Card
              alignItems="center"
              bg="#04192b"
              display="flex"
              flexDirection="column"
              height="780px"
              justifyContent="flex-start"
            >
              <ModalCloseButton />
              <Flex alignItems="center" direction="column">
                <Tabs colorScheme="blue"
                  index={tabIndex}
                  marginTop="30px"
                  variant="soft-rounded"
                  onChange={(index) => setTabIndex(index)}
                >
                  <TabList marginLeft="200px">
                    <Tab>OWNER</Tab>
                    <Tab>LAND HOLDING</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <OwnerCard
                        data={ownerData}
                        editMode={editMode}
                        ownerName={ownerName}
                        setData={setOwnerData}
                        onSave={saveOwnerData}
                        onUpdate={onUpdateOwner}
                      />
                    </TabPanel>
                    <TabPanel>
                      <LandHoldingCard
                        authToken={authToken}
                        data={landData}
                        editMode={editMode}
                        getToken={getToken}
                        setData={setLandData}
                        userId={userId}
                        onSave={saveLandData}
                        onUpdateLand={onUpdateLand}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Flex>
            </Card>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>

  );
}

export default ListingCard;
