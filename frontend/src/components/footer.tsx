import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
        <>
          <Box sx={{backgroundColor:"#1976d2",color:'white',display:'flex',direction:'row',justifyContent:"center" }}>
                <Typography>
                      <Box sx={{ fontWeight: 'bold'}}>wizCRM --- Copyright 2024</Box>
                </Typography>
          </Box>        
        </>
  );
}

export default Footer;
