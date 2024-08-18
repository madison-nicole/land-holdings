import React, { useRef, useCallback, useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalBody, Card,
  ModalCloseButton, Button, CardFooter, Tabs, TabList,
  TabPanel, Tab, TabPanels, Flex,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useUser } from '@clerk/clerk-react';
import OwnerCard from './owner-card/owner-card';
import LandHoldingCard from './land-holding-card/land-holding-card';
import { emptyLandData, emptyOwnerData } from '../../utils/listing-utils';
import { errorToast, successToast } from '../../utils/toast-utils';
import addOwner from '../../actions/index';

function ListingCard({ onClose, isOpen }) {
  const finalRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const userInfo = useUser();
  const userId = userInfo.id;

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
  const saveOwnerData = useCallback(() => {
    // Check that all field requirements are met
    if (validForm) {
      console.log(ownerData);

      // Save the owner listing
      dispatch(addOwner(userId, ownerData));

      // Close the modal and clear the data
      onCloseListing();

      // Display success toast
      toast(successToast);
    } else {
      // Display an error toast
      toast(errorToast);
    }
  }, [validForm, dispatch, userId, ownerData, onCloseListing, toast]);

  // Save the land holding entry
  // const saveLandData = useCallback(() => {
  //   // Check that all field requirements are met
  //   if (validLandForm) {
  //     // Save the owner listing
  //     dispatch(addListing(landData, listingTypes.land, userId));

  //     // Close the modal and clear the data
  //     onCloseListing();

  //     // Display success toast
  //     toast(successToast);
  //   } else {
  //     // Display an error toast
  //     toast(errorToast);
  //   }
  // }, [validLandForm, dispatch, landData, userId, onCloseListing, toast]);

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
                      <OwnerCard data={ownerData} setData={setOwnerData} />
                      <CardFooter>
                        <Button
                          _hover={{ bg: '#a1c1d2' }}
                          aria-label="save owner data"
                          bg="#bee3f8"
                          color="#06253f"
                          fontWeight={700}
                          marginLeft="250px"
                          marginTop="38.5px"
                          variant="outline"
                          onClick={saveOwnerData}
                        >SAVE
                        </Button>
                      </CardFooter>
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
