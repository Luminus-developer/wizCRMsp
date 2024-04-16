import React from 'react';
import { redirect  } from 'react-router-dom';

interface PrivateRouteProps {
    component: React.ComponentType<any>;
    isAuthenticated: boolean;
    path: string;
    exact?: boolean;
  }
  
  function PrivateRoute({component,isAuthenticated}:PrivateRouteProps ) {
    return (
            <>
            {isAuthenticated ? component : redirect("/login")}
            </>
    );
  }

  export default PrivateRoute;