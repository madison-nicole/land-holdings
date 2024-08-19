import React, { useCallback } from 'react';
import {
  Tabs, TabList, TabPanel, TabPanels,
  Tab, Flex, Button,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useUser } from '@clerk/clerk-react';
import Owners from './owners';
import LandHoldings from './land-holdings';
import JumpToTop from './jump-to-top';
import ListingCard from './listing-card/listing-card';

function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userInfo = useUser();
  const userId = userInfo.user.id.substring(5);

  console.log('userId', userId);

  const openListingCard = useCallback(() => {
    onOpen();
  }, [onOpen]);

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
      <ListingCard isOpen={isOpen} userId={userId} onClose={onClose} />
      <Tabs colorScheme="blue" variant="soft-rounded">
        <TabList display="flex" justifyContent="center" margin={10}>
          <Tab cursor="pointer" fontSize={13.5} fontWeight={700}>Owners</Tab>
          <Tab cursor="pointer" fontSize={13.5} fontWeight={700}>Land Holdings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Owners userId={userId} />
          </TabPanel>
          <TabPanel>
            <LandHoldings userId={userId} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <JumpToTop />
    </Flex>
  );
}

export default Info;
