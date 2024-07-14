import { ReactNode, useContext } from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import SideMenu from "../components/sideMenu";
import Login from "../pages/login";

import { GeneralFunctionContext as GeneraleFunctionContext } from '../context/generalFunctionContext.tsx';

type MainTemplateProps = {
  children: ReactNode;
}

function MainTemplate({ children }: MainTemplateProps) {

  const generalFunctionContext = useContext(GeneraleFunctionContext);

  let isAuthenticated: boolean = false;
  if (generalFunctionContext != null) {
    isAuthenticated = generalFunctionContext.isUserAutheticated();
    //console.log("MainTempalte: " + isAuthenticated);
  }

  let isDisplaySideBar: boolean = true;
  if (generalFunctionContext != null) {
    isDisplaySideBar = generalFunctionContext.isSideBarComponentVisibile();
  }

  console.log("Rendering MainTemplate...");

  return (
    <>
      {isAuthenticated
        ? <>
            <div className="App">
              <Header/>
              <div className="container">
                  {isDisplaySideBar ? <SideMenu /> : ""}
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
