import React from 'react';
import { Image } from '@chakra-ui/react';
import background from '../media/pcg-cover.png';

function Welcome() {
  return (
    <div className="welcome-container">
      <Image src={background} />
      <h1 id="welcome-title">Welcome to Owner and Land Holdings</h1>
      <h6 id="welcome-msg">Create an account or sign in to start views and operations on Owner and Land Holdings.</h6>
    </div>
  );
}

export default Welcome;
