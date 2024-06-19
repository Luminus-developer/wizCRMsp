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

  let auth : boolean = false;
  if (authContext != null) {
    auth = authContext.isUserAutheticated();
    console.log("MainTempalte: "+auth);
  }

  return (
      <>
        {auth ? 
          <><Header/> <SideMenu/><center>{children}</center> <Footer/></>
        : <><Login/></>} 
      </>
  );
}

export default MainTemplate;
