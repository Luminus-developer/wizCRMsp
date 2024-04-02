import {ReactNode } from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import SideMenu from "../components/sideMenu";

type MainTemplateProps = {
  children : ReactNode;
}

function MainTemplate({children}:MainTemplateProps ) {
  return (
      <>
        <Header/>
        <SideMenu/>
          <center>{children}</center>
        <Footer/>
      </>
  );
}

export default MainTemplate;
