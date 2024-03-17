import { FormEvent, MouseEvent, useState  } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import Loading from '../components/loading.tsx';

import {LoginDTO} from '../dto/loginDTO.tsx';
import {ResponseDTO} from '../dto/responseDTO.tsx';
import {AuthenticationBO} from '../business_logic/autheticationBO';
import wizCRMLogo from '../assets/wizCRM.jpg'

import {getFormElementValueAsString} from '../utils/pageUtil.tsx';

const defaultTheme = createTheme();

function Login() {
    
    const [waiting, setWaiting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };


    async function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault(); // blocca la gestione di default dell'evento

        setWaiting(true);
        try {
            let emailValue: string = getFormElementValueAsString(event,"email");
            let passwordValue: string = getFormElementValueAsString(event,"password");
            let bo:AuthenticationBO = new AuthenticationBO();
            let data: ResponseDTO = await bo.doLogin(new LoginDTO(emailValue,passwordValue));
            if (data != null) {
                setTimeout(() => {
                    setWaiting(false);
                }, 1000);
                
                console.log(JSON.stringify(data));
                console.log(data.errorCode);
                console.log(data.errorMessage);
                console.log(data.result);
            }
            
        } catch (error) {
            console.log(error);
        }
    }  
    
    return (
            <ThemeProvider theme={defaultTheme}>
                 <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            border:0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <a href="https://it.wikipedia.org/wiki/Ovibos_moschatus" target="_blank">
                                <img src={wizCRMLogo} className="logo" alt="WizCRM" />
                            </a>
                            <Typography variant="h4">
                                <Box sx={{ fontWeight: 'bold'}}>wizCRM v1.0</Box>
                            </Typography>
                        </Box>
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="password"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                                        <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}>
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                  </InputAdornment>
                                }}
                            />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            Sign In
                            </Button>
                        </Box>
                    </Box>

                    {waiting &&
                        <>
                          <Loading/>
                        </>
                    }
                    
                 </Container>
            </ThemeProvider>
    );
}

export default Login;
