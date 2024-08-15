import React from 'react';
import {
  Box, Container, Image, Stack,
  Text, useColorModeValue,
} from '@chakra-ui/react';
import logo from '../media/pcg-logo.png';

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color="white"
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
        <Image height={32} src={logo} />
        <Text>© 2024 Owner and Land Holdings. By Madison Nicole.</Text>
      </Container>
    </Box>
  );
}

export default Footer;
