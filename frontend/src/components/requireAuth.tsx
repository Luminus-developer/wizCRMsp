import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authContext';

type RequireAuthProps = {
  children: JSX.Element;
}

function RequireAuth({ children }: RequireAuthProps): JSX.Element {
  let auth = useAuth();
  let location = useLocation();

  console.log("RequireAuth");

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;