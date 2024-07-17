//<script type="module" src="../dto/LoginDTO"></script>

import { ErrorDTO } from '../dto/errorDTO.tsx';
import {LoginDTO} from '../dto/loginDTO.tsx';
import { ResponseDTO } from '../dto/responseDTO.tsx';

import axios from 'axios';

export class AuthenticationBO {

    constructor() {}

    // richiama il web service per il login
    async doLogin(login: LoginDTO) : Promise<ResponseDTO> {

        console.log("BO doLogin: "+JSON.stringify(login));

        let result = new ResponseDTO();
        try {
            const response = await axios.get("http://localhost:3000/login?userName="+login.userName+"&password="+login.password)
            result = response.data;
        } catch (error) {
            if (error != null && error != undefined) { 
                console.log(error);
                result.error = new ErrorDTO(1,JSON.stringify(error, Object.getOwnPropertyNames(error)));
            }
        }
        return result;
    }
    
    
    async getAppMenu(role:string) : Promise<ResponseDTO> {

        console.log("BO getAppMenu: "+role);

        let result = new ResponseDTO();
        try {
            const response = await axios.get("http://localhost:3000/getMenu?role="+role)
            result = response.data;
        } catch (error) {
            if (error != null && error != undefined) { 
                console.log(error);
                result.error = new ErrorDTO(1,JSON.stringify(error, Object.getOwnPropertyNames(error)));
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