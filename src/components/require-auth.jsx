import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthenticated from '../hooks/auth-hooks';

function RequireAuth({ children }) {
  const authenticated = useAuthenticated();

  if (!authenticated) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default RequireAuth;
