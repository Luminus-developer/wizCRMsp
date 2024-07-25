import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import React, { useContext } from 'react';
import { useState,useRef } from 'react';

import wizCRMLogo from '../assets/wizCRM_app_logo.png'
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import TextField from '@mui/material/TextField';
import { alpha } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from '@mui/icons-material/Menu';

import { deepOrange } from '@mui/material/colors';
//import { GeneralContext } from '../context/generalContext';

/**
 * La voce di menù Contacts conterrà i seguenti sotto menù: Leads, Prospetcs e Customers
 * Tutte le etichette devono essere tradotte in varie lingue
 * 
 */

// Voci del submenù dell'immagine dell'utente collegato
const settings = ['Profile', 'Dashboard', 'Logout'];

const defaultTheme = createTheme();

function Header({showSideBarComponentFunction = () => {} }) {

  // Aggiungere codice per gestire gli eventi

  //const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [showClearIcon, setShowClearIcon] = useState("none");
  /*
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  */

  

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  /*
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  */

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const valueClearIconSearchTestRef = useRef<HTMLInputElement | null>(null)

  const handleCancelSearchClick = (): void => {
    if (valueClearIconSearchTestRef.current != null)
      valueClearIconSearchTestRef.current.value = "";

    setShowClearIcon("none");
  };

  console.log("Rendering Header...");

  //const generalFunctionContext = useContext(GeneralContext);

  /*
  const handleDisplaySideBarComponent = () => {
    if (generalFunctionContext != null) {
      if (generalFunctionContext.isSideBarComponentVisibile())
        generalFunctionContext.setDisplaySideBarComponent(false);
      else 
        generalFunctionContext.setDisplaySideBarComponent(true);
    }
  };
  */

  return (                                                                                                                                                                                                                                                                                                   
    <> 

    <ThemeProvider theme={defaultTheme}>   
      <AppBar> 
          <Toolbar disableGutters>
             <Box sx={{display:'flex',flexDirection:'row', justifyContent:'space-between',border:0,width:'100vw'}}>
              <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',border:0}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ marginLeft:'5px'}}
                    onClick={() => {showSideBarComponentFunction();}}
                  >
                    <MenuIcon />
                  </IconButton>

                <a title='wizCRM' href="https://it.wikipedia.org/wiki/Ovibos_moschatus" target="_blank">
                  <img src={wizCRMLogo} className="logoApp" alt="WizCRM" />
                </a>
                <Typography variant="h6">
                      <Box sx={{ fontWeight: 'bold'}}>wizCRM</Box>
                </Typography>
              </Box>
              <Box sx={{display:'flex',flexDirection:'row',border:0,flexGrow:0.5, alignItems:'center'}}>
                  <TextField
                    inputRef={valueClearIconSearchTestRef}
                    color='primary'
                    variant='outlined'
                    id="search"
                    name="search"
                    fullWidth={true}
                    sx={{backgroundColor: alpha(defaultTheme.palette.common.white, 0.15),marginLeft:0}}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment sx={{padding:0,margin:0}}
                          position="end"
                          style={{ display: showClearIcon }}
                          onClick={handleCancelSearchClick}
                        >
                          <ClearIcon />
                        </InputAdornment>
                      )
                    }}
                  />
              </Box>
              <Box sx={{display:'flex',flexDirection:'row',border:0,marginRight:'0em' }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>SG</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
          </Toolbar>
      </AppBar>
      </ThemeProvider>
    </>    
  );
}

export default Header;
