export class LoginDTO {
    userName: string | undefined;
    password: string | undefined;
    
    constructor() {
        this.userName = "";
        this.password = "";
    }

    reset() : void {
        this.userName = "";
        this.password = "";
    }
}
