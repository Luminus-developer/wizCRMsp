import { useContext, useEffect,useState } from "react";

import Box from "@mui/material/Box";
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { AuthenticationBO } from "../business_logic/autheticationBO";
import { ResponseDTO } from "../dto/responseDTO";

import {GeneralContext} from '../context/generalContext.tsx';
import { useTreeViewApiRef } from "@mui/x-tree-view";


function SideMenu() {

  const [menuItems, setMenuItems] = useState(new Array());

  const apiRef = useTreeViewApiRef();

  const authContext = useContext(GeneralContext);

  let userRole : string = "Unknown";
  if (authContext != null && authContext.user != null) {
    userRole  = authContext.user.role;

    console.log("User Role: "+userRole);
  }

  useEffect(() => {
    console.log("SideMenu UseEffect");

    if (menuItems != null && menuItems.length > 0) return; // E' l'unico modo per non chiamare più volte la webapi

    const callWebAPI = async () => {
      console.log("SideBasr callWebAPI");

      let bo:AuthenticationBO = new AuthenticationBO();
      let dataResponse:ResponseDTO = new ResponseDTO();

      try {
          dataResponse = await bo.getAppMenu(userRole);
          await processResponse(dataResponse);
      } catch (error) {
        console.log(error);
      } 
    }

    callWebAPI();
  },[menuItems]);

  async function processResponse(data:ResponseDTO) {
    console.log("SideMenu UseEffect: "+JSON.stringify(data));

    let obj = JSON.parse(JSON.stringify(data));
    
    let menu = obj.result.menu;

    console.log("Menu json :"+JSON.stringify(menu));
    let menuItemsCount = Object.keys( menu).length;

    let menuItemsTemp = new Array(menuItemsCount);
    let i:number = 0;
    for(let item of menu){
      menuItemsTemp[i] = item;
      i++;
    }

    setMenuItems(menuItemsTemp); // Riassegna i dati da visualizzare nel menù ad albero

    console.log(menuItems);
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
                  <RichTreeView apiRef={apiRef} items={menuItems} />
            </Box>
          </div>
        </>
    );
  
  }
  
  export default SideMenu;
