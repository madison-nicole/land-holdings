/* eslint-disable no-nested-ternary */
import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import {
  Modal, ModalOverlay, ModalFooter, ModalContent,
  ModalCloseButton, Button, Flex, Input,
} from '@chakra-ui/react';
import VerificationInput from 'react-verification-input';
import { signinUser, signupUser } from '../actions';
import formatPhoneInput from '../utils/utils';

function AuthModal({ isOpen, onClose, accountStatus }) {
  const dispatch = useDispatch();
  const phoneInputRef = useRef(null);
  const [phone, setPhone] = useState('');
  const [verificationMode, setVerificationMode] = useState(false);

  // Clear state on close
  useEffect(() => {
    if (!isOpen) {
      setPhone('');
    }
  }, [isOpen]);

  const handleAuth = useCallback(() => {
    if (accountStatus) {
      dispatch(signinUser(phone));
    } else {
      dispatch(signupUser(phone));
    }
    onClose();
    setVerificationMode(false);
  }, [accountStatus, dispatch, onClose, phone]);

  const handleVerification = useCallback(() => {
    setVerificationMode(true);
  }, []);

  const handlePhoneInput = (e) => {
    const { value, selectionStart, selectionEnd } = e.target;
    const formattedInput = formatPhoneInput(value);
    setPhone(formattedInput);

    if (phoneInputRef.current) {
      const position = formattedInput.indexOf(
        value[selectionStart - 1],
        selectionEnd - 1,
      ) + 1 || selectionEnd;

      phoneInputRef.current.setSelectionRange(position, position);
    }
  };

  function renderModalContent() {
    if (verificationMode) {
      return (
        <>
          <VerificationInput />
          <ModalFooter>
            <Button onClick={handleAuth}>Confirm</Button>
          </ModalFooter>
        </>
      );
    } else {
      return (
        <>
          <Input
            marginBottom="40px"
            marginTop="10px"
            placeholder="Enter phone number"
            ref={phoneInputRef}
            size="sm"
            type="tel"
            value={phone}
            width="40%"
            onChange={handlePhoneInput}
          />
          <ModalFooter>
            <Button onClick={handleVerification}>
              {accountStatus ? 'Log In' : 'Sign Up'}
            </Button>
          </ModalFooter>
        </>
      );
    }
  }

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} scrollBehavior="inside" onClose={onClose}>
      <ModalOverlay />
      <ModalContent marginTop="150px">
        <ModalCloseButton />
        <Flex alignItems="center" direction="column" marginBottom="40px" marginTop="40px">
          {renderModalContent()}
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default AuthModal;
