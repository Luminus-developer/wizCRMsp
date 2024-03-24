export class LoginDTO {
    userName: string | undefined;
    password: string | undefined;

    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }

    reset() : void {
        this.userName = "";
        this.password = "";
    }
}
