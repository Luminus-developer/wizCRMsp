import { useContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { AuthenticationBO } from "../business_logic/autheticationBO";
import { ResponseDTO } from "../dto/responseDTO";

import {GeneralContext} from '../context/generalContext.tsx';


function SideMenu() {

  const [loaded, setLoaded] = useState(false);
  const authContext = useContext(GeneralContext);

  let userRole : string = "Unknown";
  if (authContext != null && authContext.user != null) {
    userRole  = authContext.user.role;
  }

  useEffect(() => {
    console.log("SideMenu UseEffect");

    const callWebAPI = async () => {
      console.log("SideBasr callWebAPI");

      if (loaded === true) return; // E' l'unico modo per non chiamare più volte la webapi

      let bo:AuthenticationBO = new AuthenticationBO();
      let dataResponse:ResponseDTO = new ResponseDTO();

      try {

          console.log("Login Form Data UseEffect: "+JSON.stringify(loginDto));

          dataResponse = await bo.getAppMenu(userRole);
          await processResponse(dataResponse);
      } catch {} // La gestione degli errori è nella classe di Business Logic

      await processResponse(dataResponse);
    }

    callWebAPI();
  },[loaded]);

  async function processResponse(data:ResponseDTO) {
    console.log(data);

    // Assegna la struttura del menù al componente grafico

    setLoaded(true); // modificando questo stato sarà richimaato il rendering ma non sarà eseguito lo useEffect
  }

  console.log("Rendering SideMenu...");

    return (
        <>
          <div className="drawer">

            <Box
                sx={{
                  border:0,
                  display: 'flex',
                  flexDirection: 'column',
                  height:'96vh',
                  justifyContent:'center',
                  alignItems: 'center'
              }}>            
                  Side menù
            </Box>
          </div>
        </>
    );
  
  }
  
  export default SideMenu;
