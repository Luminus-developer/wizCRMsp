
import {LoginDTO} from '../dto/loginDTO.tsx';
import {AuthenticationBO} from '../business_logic/autheticationBO';

function Login() {

    let l = new LoginDTO();
    l.userName = "test";
    l.password = "test";

    let bo = new AuthenticationBO();

    let result = bo.doLogin(l);

    console.log(result);

    return (
        <h1>Login -- Check log console </h1>
    )
}

export default Login;
