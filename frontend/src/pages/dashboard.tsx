import { useEffect, useState,useContext} from "react";
import { Navigate } from 'react-router-dom';

import {AuthContext} from './../context/authContext.tsx';
import {User} from '../dto/user.tsx';

//import Cookies from 'js-cookie';

function DashBoard() {
  //const [authenticated, setauthenticated] = useState(false); 

  console.log ("DashBoard");

  const authContext = useContext(AuthContext);

  let authenticated = false;

  let user: User;
  
  if (authContext != null && authContext.user != null) {
      user = authContext.user;
      authenticated = true;
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

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
}

export default DashBoard;
