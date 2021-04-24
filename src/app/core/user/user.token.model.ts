export class UserToken {
    constructor(
       private username: string,
       private accessToken: string,
       private refreshToken: string,
       private expiresIn: number,
      ) {}

      get token():string {
          //expires check and return
        return this.accessToken;
      }

}
