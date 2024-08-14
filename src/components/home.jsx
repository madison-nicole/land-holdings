import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import NavBar from './nav-bar';
import AuthModal from './auth-modal';

function Home() {
  const [accountStatus, setAccountStatus] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <NavBar setAccountStatus={setAccountStatus} onOpen={onOpen} />
      <AuthModal accountStatus={accountStatus} isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default Home;
