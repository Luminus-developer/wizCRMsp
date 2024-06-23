import { ReactNode } from 'react';
import { redirect  } from 'react-router-dom';

interface PrivateRouteProps {
    component: ReactNode;
    isAuthenticated: boolean;
  }
  
  function PrivateRoute({component,isAuthenticated}:PrivateRouteProps ) {
    return (
            <>
              {isAuthenticated ? component : redirect("/login")}
            </>
    );
  }

  export default PrivateRoute;