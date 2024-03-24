import { ErrorDTO } from "./errorDTO";

export class ResponseDTO {

    result: any | undefined;
    error : ErrorDTO | undefined;

    constructor() {
        this.result = "";
        this.error = new ErrorDTO(0,"");
    }
}