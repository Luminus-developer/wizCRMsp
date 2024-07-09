import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import React from 'react';

import wizCRMLogo from '../assets/wizCRM_app_logo.png'
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import TextField from '@mui/material/TextField';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

/**
 * La voce di menù Contacts conterrà i seguenti sotto menù: Leads, Prospetcs e Customers
 * Tutte le etichette devono essere tradotte in varie lingue
 * 
 */

const contactsPages = ['Leads','Prospects','Customers']; // Trovare il modo per Aggiungere queste voci sotto il pulsante "Contacts"

// Voci del submenù dell'immagine dell'utente collegato
const settings = ['Profile', 'Dashboard', 'Logout'];

const defaultTheme = createTheme();

function Header() {

  // Aggiungere codice per gestire gli eventi

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (                                                                                                                                                                                                                                                                                                   

    <> 

    <ThemeProvider theme={defaultTheme}>   
      <AppBar> 
          <Toolbar disableGutters>
            <Box sx={{display:'flex',flexDirection:'row', justifyContent:'flex-start',alignItems:'center',flexGrow:0.5,border:0}}>
              <a title='wizCRM' href="https://it.wikipedia.org/wiki/Ovibos_moschatus" target="_blank">
                <img src={wizCRMLogo} className="logoApp" alt="WizCRM" />
              </a>
              <Typography variant="h6">
                    <Box sx={{ fontWeight: 'bold'}}>wizCRM</Box>
              </Typography>
            </Box>
            <Box sx={{flexGrow:2}}>
              <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',border:0}}>
                <TextField
                  color='primary'
                  id="search"
                  name="search"
                  sx={{backgroundColor: alpha(defaultTheme.palette.common.white, 0.15),borderRadius: defaultTheme.shape.borderRadius}}
                />              
              </Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',border:0, justifyContent:'flex-end',flexGrow:1,marginRight:'2em' }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          </Toolbar>
      </AppBar>
      </ThemeProvider>
    </>    
  );
}

export default Header;
