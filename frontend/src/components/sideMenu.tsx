import Box from "@mui/material/Box";

function SideMenu() {

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
