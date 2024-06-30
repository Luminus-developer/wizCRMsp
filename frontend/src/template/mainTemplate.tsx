import { ReactNode, useContext } from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import SideMenu from "../components/sideMenu";
import Login from "../pages/login";

import { AuthContext } from './../context/authContext.tsx';

import CssBaseline from '@mui/material/CssBaseline';

type MainTemplateProps = {
  children: ReactNode;
}

function MainTemplate({ children }: MainTemplateProps) {

  const authContext = useContext(AuthContext);

  let isAuthenticated: boolean = false;
  if (authContext != null) {
    isAuthenticated = authContext.isUserAutheticated();
    console.log("MainTempalte: " + isAuthenticated);
  }

  return (
    <>
      {isAuthenticated
        ? <>
            <div className="App">
              <Header/>
              <div className="container">
                  <SideMenu />
                  <div className="main">
                      {children}
                  </div>
              </div>
              <Footer/>
            </div>
        </>
        : <><Login /></>
      }
    </>
  );
}

export default MainTemplate;
