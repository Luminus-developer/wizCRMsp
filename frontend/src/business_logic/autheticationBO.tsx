//<script type="module" src="../dto/LoginDTO"></script>

import {LoginDTO} from '../dto/loginDTO.tsx';
import { ResponseDTO } from '../dto/responseDTO.tsx';

export class AuthenticationBO {

    constructor() {}

    // richiama il web service per il login
    doLogin(login: LoginDTO) : ResponseDTO {

        let result = new ResponseDTO();
        try {
            console.log("start doLogin");
                console.log(login.userName);
                console.log(login.password);
            console.log("end doLogin");

            throw new TypeError('Error message');

        } catch (error) {
            result.errorCode = 1;
            if (error != null && error != undefined) { 
                result.errorMessage = JSON.stringify(error, Object.getOwnPropertyNames(error));
            }
        }
    
        return result;
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