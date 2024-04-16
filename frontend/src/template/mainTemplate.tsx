import {ReactNode } from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import SideMenu from "../components/sideMenu";

type MainTemplateProps = {
  children : ReactNode;
  isAuthenticated: boolean;
}

function MainTemplate({isAuthenticated,children}:MainTemplateProps ) {
  return (
      <>
        {isAuthenticated ? 
          <><Header/> <SideMenu/><center>{children}</center> <Footer/></>
         : <>{children}</>} 
      </>
  );
}

export default MainTemplate;
