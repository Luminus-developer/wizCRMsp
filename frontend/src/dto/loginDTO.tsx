export class LoginDTO {
    userName: string | undefined;
    password: string | undefined;
    
    constructor() {
        this.userName = "";
        this.password = "";
    }

    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }

    reset() : void {
        this.userName = "";
        this.password = "";
    }
}
