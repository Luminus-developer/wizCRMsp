import { ReactNode, useContext,useState } from "react";
import Header from "../components/header.tsx"
import Footer from "../components/footer.tsx"
import SideMenu from "../components/sideMenu.tsx";
import Login from "../pages/login.tsx";

import { GeneralContext as GeneraleFunctionContext } from '../context/generalContext.tsx';

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
 
  const [displaySideBarComponent, setDisplaySideBarComponent] = useState(true);

  console.log("Rendering MainTemplate...");

  const showSideBarComponentFunction = () => {
    setDisplaySideBarComponent(!displaySideBarComponent);
  };

  return (
    <>
      {isAuthenticated
        ? <>
            <div className="App">
              <Header showSideBarComponentFunction={showSideBarComponentFunction}  />
              <div className="container">
                  {displaySideBarComponent ? <SideMenu /> : ""}
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
