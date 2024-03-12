
import {LoginDTO} from '../dto/loginDTO.tsx';
import {ResponseDTO} from '../dto/responseDTO.tsx';
import {AuthenticationBO} from '../business_logic/autheticationBO';
import wizCRMLogo from '../assets/wizCRM.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormEvent } from 'react';
import {getFormElementValueAsString} from '../utils/pageUtil.tsx';

const defaultTheme = createTheme();

function Login() {

    async function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault(); // blocca la gestione di default dell'evento

        try {
            let emailValue: string = getFormElementValueAsString(event,"email");
            let passwordValue: string = getFormElementValueAsString(event,"password");
            let userData = new LoginDTO(emailValue,passwordValue);
            let bo:AuthenticationBO = new AuthenticationBO();
            let data: ResponseDTO = await bo.doLogin(userData);
            console.log("Response Data "+data);
            if (data != null) {
                console.log(JSON.stringify(data));
                console.log(data.errorCode);
                console.log(data.errorMessage);
                console.log(data.result);
            }
            
        } catch (error) {
            console.log(error);
        }

        /*
        let emailInput = event.currentTarget.elements.namedItem("email");
        let passwordInput = event.currentTarget.elements.namedItem("password");

        if (emailInput != null && passwordInput != null) {
            let emailValue: string = (emailInput as HTMLInputElement).value; 
            let passwordValue: string = (passwordInput as HTMLInputElement).value; 

            let userData = new LoginDTO(emailValue,passwordValue);
            let bo:AuthenticationBO = new AuthenticationBO();
        
            let data: ResponseDTO = await bo.doLogin(userData);
            console.log("Response Data "+data);
            if (data != null) {
                console.log(JSON.stringify(data));
                console.log(data.errorCode);
                console.log(data.errorMessage);
                console.log(data.result);
            }
            
        }
        */
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
                                <Box sx={{ fontWeight: 'bold'}}>wizCRM</Box>
                            </Typography>
                        </Box>
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
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
                                type="password"
                                id="password"
                                autoComplete="current-password"
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
                   
                 </Container>
            </ThemeProvider>
    );
}

export default Login;
