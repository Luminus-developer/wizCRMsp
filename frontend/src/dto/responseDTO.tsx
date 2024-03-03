export class ResponseDTO {

    result: any | undefined;
    errorCode: number | undefined;
    errorMessage: string |undefined;

    constructor() {
        this.result = "";
        this.errorCode = 0;
        this.errorMessage = "";
    }

}