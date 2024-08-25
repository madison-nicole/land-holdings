import React from 'react';
import {
  Box, Container, Image, Stack,
  Text, useColorModeValue,
} from '@chakra-ui/react';
import logo from '../media/pcg-logo.png';

function Footer() {
  return (
    <div className="footer">
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color="white"
        height="75px"
      >
        <Container
          align={{ base: 'center', md: 'center' }}
          as={Stack}
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}
          maxW="6xl"
          py={4}
          spacing={4}
        >
          <Image height="60px" mb="10px" src={logo} />
          <Text>© 2024 Owner and Land Holdings. By Madison Nicole.</Text>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;
