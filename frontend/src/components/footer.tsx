import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {

  console.log("Rendering Footer...");

  return (
        <>
          <Box sx={{backgroundColor:"#1976d2",color:'white',display:'flex',direction:'row',justifyContent:"center" }}>
                <Typography sx={{ fontWeight: 'bold'}}>
                        wizCRM --- Copyright 2024
                </Typography>
          </Box>        
        </>
  );
}

export default Footer;
