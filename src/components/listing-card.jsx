import React, { useRef, useCallback, useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalBody, Card,
  ModalCloseButton, Button, CardFooter, Tabs, TabList,
  TabPanel, Tab, TabPanels, Flex,
} from '@chakra-ui/react';
import OwnerCard from './owner-card';
import LandHoldingCard from './land-holding-card';

// set up enum for entry types
const EntryTypes = Object.freeze({
  Owner: 'OWNER',
  LandHolding: 'LAND HOLDING',
});

function ListingCard({ onClose, isOpen }) {
  // Modal setup
  const finalRef = useRef(null);

  const [entryType, setEntryType] = useState(EntryTypes.Owner);
  const [ownerFields, setOwnerFields] = useState({});
  const [landFields, setLandFields] = useState({});

  console.log(entryType);

  const onCloseListing = useCallback(() => {
    // close modal
    onClose();

    // clear fields
    setOwnerFields({});
    setLandFields({});

    // clear selected
    // dispatch(clearSelectedGame());
    console.log(ownerFields);
    console.log(landFields);
  }, [landFields, onClose, ownerFields]);

  const switchToLand = useCallback(() => {
    setEntryType(EntryTypes.LandHolding);

    // clear owner fields
    setOwnerFields({});
  }, [setEntryType]);

  const switchToOwner = useCallback(() => {
    setEntryType(EntryTypes.Owner);

    // clear land holding fields
    setLandFields({});
  }, [setEntryType]);

  return (
    <div>
      <Modal blockScrollOnMount={false}
        finalFocusRef={finalRef}
        isCentered
        isOpen={isOpen}
        scrollBehavior="inside"
        onClose={onCloseListing}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding="0px" width="fit-content">
            <Card
              alignItems="center"
              display="flex"
              flexDirection="column"
              height="700px"
              justifyContent="center"
            >
              <ModalCloseButton />
              <Flex alignItems="center" direction="column">
                <Tabs colorScheme="blue" variant="soft-rounded">
                  <TabList>
                    <Tab onClick={switchToLand}>OWNER</Tab>
                    <Tab onClick={switchToOwner}>LAND HOLDING</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <OwnerCard setFields={setOwnerFields} />
                    </TabPanel>
                    <TabPanel>
                      <LandHoldingCard setFields={setLandFields} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
                <CardFooter>
                  <Button>SAVE</Button>
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
