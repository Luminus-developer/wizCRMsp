import {ReactNode,useContext } from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import SideMenu from "../components/sideMenu";
import Login from "../pages/login";

import {AuthContext} from './../context/authContext.tsx';

type MainTemplateProps = {
  children : ReactNode;
}

function MainTemplate({children}:MainTemplateProps ) {

  const authContext = useContext(AuthContext);

  let isAuthenticated = false;

  if (authContext != null && authContext.user != null) {
    isAuthenticated = true;
  } 

  console.log("MainTemplate "+isAuthenticated);

  return (
      <>
        {isAuthenticated ? 
          <><Header/> <SideMenu/><center>{children}</center> <Footer/></>
        : <><Login/></>} 
      </>
  );
}

export default MainTemplate;
