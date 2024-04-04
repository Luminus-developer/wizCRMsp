import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';

function DashBoard() {
  const [authenticated, setauthenticated] = useState(false); 

  useEffect(() => {
    const autheticantedString = localStorage.getItem("authenticated");

    console.log("DashBoard :"+authenticated);

    setauthenticated(("true" === autheticantedString));

    console.log("DashBoard :"+authenticated);
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
