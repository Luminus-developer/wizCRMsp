
//import {LoginDTO} from '../dto/loginDTO.tsx';
//import {AuthenticationBO} from '../business_logic/autheticationBO';
import wizCRMLogo from '../assets/wizCRM.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const defaultTheme = createTheme();

function Login() {

    /*
    let l = new LoginDTO();
    l.userName = "test";
    l.password = "test";

    let bo = new AuthenticationBO();

    let result = bo.doLogin(l);

    console.log(result);
    */

    return (
            <ThemeProvider theme={defaultTheme}>
                 <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Box
                            sx={{
                                marginTop: 8,
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
                        <Box component="form" noValidate>
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
                            sx={{ mt: 3, mb: 2 }}
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
