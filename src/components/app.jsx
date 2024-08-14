import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

import Home from './home';
import FallBack from './fallback';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <ChakraProvider>
      <ClerkProvider afterSignOutUrl="/" publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<FallBack />} path="*" />
          </Routes>
        </BrowserRouter>
      </ClerkProvider>
    </ChakraProvider>
  );
}
