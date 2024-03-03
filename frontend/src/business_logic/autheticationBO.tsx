//<script type="module" src="../dto/LoginDTO"></script>

import {LoginDTO} from '../dto/loginDTO.tsx';

export class AuthenticationBO {

    constructor() {}

    doLogin(login: LoginDTO) : boolean {

        console.log("start doLogin");
            console.log(login.userName);
            console.log(login.password);
        console.log("end doLogin");
    
        return false;
    }    
}


/* Esportazione di una singola funzione

function doLogin(login: LoginDTO) : boolean {

    console.log("start doLogin");
        console.log(login.userName);
        console.log(login.password);
    console.log("end doLogin");

    return false;
}

export {doLogin};
*/