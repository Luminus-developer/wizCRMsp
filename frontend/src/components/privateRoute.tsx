import { ReactNode,useContext } from 'react';
import Login from "../pages/login";

import {GeneralFunctionContext} from '../context/generalFunctionContext.tsx';

interface PrivateRouteProps {
    component: ReactNode;
  }
  
  function PrivateRoute({component}:PrivateRouteProps ) {

    const authContext = useContext(GeneralFunctionContext);

    let isAuthenticated : boolean = false;
    if (authContext != null) {
      isAuthenticated = authContext.isUserAutheticated();
    }

    return (
      <>
          {isAuthenticated 
            ?  <>{component}</>
            :  <><Login/></>
          }           
      </>
    );
  }

  export default PrivateRoute;