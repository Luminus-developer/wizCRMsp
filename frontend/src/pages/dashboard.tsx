import { useEffect, useState,useContext} from "react";
import { Navigate } from 'react-router-dom';

import {AuthContext} from './../context/authContext.tsx';
import {User} from '../dto/user.tsx';
import Box from "@mui/material/Box";

//import Cookies from 'js-cookie';

function DashBoard() {
  //const [authenticated, setauthenticated] = useState(false); 

  console.log ("DashBoard");

  const authContext = useContext(AuthContext);

  let auth : boolean = false;
  if (authContext != null) {
    auth = authContext.isUserAutheticated();
    console.log("MainTempalte: "+auth);
  }

  useEffect(() => {

    console.log ("DashBoard UseEffect");


    /*
    const autheticantedString = localStorage.getItem("authenticated");

    console.log("DashBoard Autheticaded:"+authenticated);

    const token = Cookies.get('token');

    console.log("DashBoard Token:"+JSON.stringify(token));


    setauthenticated(("true" === autheticantedString));

    console.log("DashBoard :"+authenticated);
    */
  }, []);

  if (!auth) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
         <Box
                sx={{
                  border:0,
                  display: 'flex',
                  flexDirection: 'column',
                  height:'96vh',
                  justifyContent:'center',
                  alignItems: 'center'
              }}>            
                  DashBoard
            </Box>
      </>
    );
  }
}

export default DashBoard;
