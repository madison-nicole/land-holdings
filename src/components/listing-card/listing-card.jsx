import React, { useRef, useCallback, useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalBody, Card,
  ModalCloseButton, Tabs, TabList,
  TabPanel, Tab, TabPanels, Flex,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import OwnerCard from './owner-card/owner-card';
import LandHoldingCard from './land-holding-card/land-holding-card';
import { emptyLandData, emptyOwnerData } from '../../utils/listing-utils';
import { errorToast, successToast } from '../../utils/toast-utils';
import { addOwner } from '../../actions';

function ListingCard({
  onClose, isOpen, userId, getToken,
}) {
  const finalRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();

  const [ownerData, setOwnerData] = useState(emptyOwnerData);
  const [landData, setLandData] = useState(emptyLandData);

  const validForm = true;

  const onCloseListing = useCallback(() => {
    // Close the modal
    onClose();

    // Clear the fields
    setOwnerData(emptyOwnerData);
    setLandData(emptyLandData);

    // Clear the selected listing
    // dispatch(clearSelectedGame());
  }, [onClose]);

  // Save the owner entry
  const saveOwnerData = useCallback(async () => {
    // Check that all field requirements are met
    if (validForm) {
      const token = await getToken();

      // Save the owner listing
      dispatch(addOwner(userId, ownerData, token));

      // Close the modal and clear the data
      onCloseListing();

      // Display success toast
      toast(successToast);
    } else {
      // Display an error toast
      toast(errorToast);
    }
  }, [validForm, getToken, dispatch, userId, ownerData, onCloseListing, toast]);

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
                <Tabs colorScheme="blue" marginTop="30px" variant="soft-rounded">
                  <TabList marginLeft="200px">
                    <Tab>OWNER</Tab>
                    <Tab>LAND HOLDING</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <OwnerCard data={ownerData} setData={setOwnerData} onSave={saveOwnerData} />
                    </TabPanel>
                    <TabPanel>
                      <LandHoldingCard data={landData} setData={setLandData} />
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
