export interface SignInResponse {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
}

export class SignInPayload {

    private grant_type: string = "password";
    private isPasswordEncrypted = "false";

    constructor(
        private username: string,
        private password: string,
        private client_id: string,
        private client_secret: string
    ){}
}

export interface SecurePublicKeyResponse {
    keyValue: string;
}
