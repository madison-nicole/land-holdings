import React from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import NavBar from './nav-bar';
import Info from './info';
import Welcome from './welcome';
import Footer from './footer';

function Home() {
  return (
    <div>
      <NavBar />
      <SignedIn>
        <Info />
      </SignedIn>
      <SignedOut>
        <Welcome />
      </SignedOut>
      <Footer />
    </div>
  );
}

export default Home;
