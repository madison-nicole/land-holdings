import React from 'react';
import {
  Tabs, TabList, TabPanel, TabPanels, Tab,
} from '@chakra-ui/react';
import Owners from './owners';
import LandHoldings from './land-holdings';
import JumpToTop from './jump-to-top';

function Info() {
  return (
    <>
      <Tabs colorScheme="blue" variant="soft-rounded">
        <TabList display="flex" justifyContent="center" margin={10}>
          <Tab cursor="pointer" fontSize={13.5} fontWeight={700}>Owners</Tab>
          <Tab cursor="pointer" fontSize={13.5} fontWeight={700}>Land Holdings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Owners />
          </TabPanel>
          <TabPanel>
            <LandHoldings />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <JumpToTop />
    </>
  );
}

export default Info;
