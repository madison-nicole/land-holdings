import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import rootReducer from './reducers';

import App from './components/app';

// Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PUBLISHABLE_KEY = 'pk_test_bWVldC1ibHVlZ2lsbC01LmNsZXJrLmFjY291bnRzLmRldiQ';

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

// this creates the store with the reducers
const store = configureStore({
  reducer: rootReducer,
});

// creates react query client
const queryClient = new QueryClient();

const root = createRoot(document.getElementById('main'));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App publishableKey={PUBLISHABLE_KEY} />
    </Provider>
  </QueryClientProvider>,
);
