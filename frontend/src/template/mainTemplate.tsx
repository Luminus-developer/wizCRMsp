import {ReactNode } from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import SideMenu from "../components/sideMenu";
import Login from "../pages/login";

type MainTemplateProps = {
  children : ReactNode;
  isAuthenticated: boolean;
}

function MainTemplate({isAuthenticated,children}:MainTemplateProps ) {
  return (
      <>
        {isAuthenticated ? 
          <><Header/> <SideMenu/><center>{children}</center> <Footer/></>
        : <><Login/></>} 
      </>
  );
}

export default MainTemplate;
