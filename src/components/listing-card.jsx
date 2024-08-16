import React, { useRef, useCallback, useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalBody, Card,
  ModalCloseButton, Button, CardFooter, Tabs, TabList,
  TabPanel, Tab, TabPanels, Flex,
} from '@chakra-ui/react';
import OwnerCard from './owner-card';
import LandHoldingCard from './land-holding-card';
import { EntryTypes, emptyLandData, emptyOwnerData } from '../utils/listing-utils';

function ListingCard({ onClose, isOpen }) {
  // Modal setup
  const finalRef = useRef(null);

  const [entryType, setEntryType] = useState(EntryTypes.Owner);
  const [ownerData, setOwnerData] = useState(emptyOwnerData);
  const [landData, setLandData] = useState(emptyLandData);

  console.log(entryType);

  //   const handleOwnerInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setOwnerData({ ...ownerData, [name]: value });
  //   };

  //   const handleLandInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setLandData({ ...landData, [name]: value });
  //   };

  //   const handleOwnerSubmit = (e) => {
  //     e.preventDefault();
  //     // Your custom submission logic here
  //   };

  const onCloseListing = useCallback(() => {
    // close modal
    onClose();

    // clear fields
    setOwnerData(emptyOwnerData);
    setLandData(emptyLandData);

    // clear selected
    // dispatch(clearSelectedGame());
  }, [onClose]);

  const switchToLand = useCallback(() => {
    setEntryType(EntryTypes.LandHolding);

    // clear owner fields
    setOwnerData(emptyOwnerData);
  }, [setEntryType]);

  const switchToOwner = useCallback(() => {
    setEntryType(EntryTypes.Owner);

    // clear land holding fields
    setLandData(emptyLandData);
  }, [setEntryType]);

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
              display="flex"
              flexDirection="column"
              height="780px"
              justifyContent="flex-start"
            >
              <ModalCloseButton />
              <Flex alignItems="center" direction="column">
                <Tabs colorScheme="blue" marginTop="30px" variant="soft-rounded">
                  <TabList>
                    <Tab onClick={switchToLand}>OWNER</Tab>
                    <Tab onClick={switchToOwner}>LAND HOLDING</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <OwnerCard data={ownerData} setData={setOwnerData} />
                    </TabPanel>
                    <TabPanel>
                      <LandHoldingCard data={landData} setData={setLandData} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
                <CardFooter>
                  <Button
                    _hover={{ bg: '#a1c1d2' }}
                    bg="#bee3f8"
                    color="#06253f"
                    fontWeight={700}
                    variant="outline"
                  >SAVE
                  </Button>
                </CardFooter>
              </Flex>
            </Card>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>

  );
}

export default ListingCard;
