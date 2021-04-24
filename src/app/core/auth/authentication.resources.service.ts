import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { ApiConstants } from 'app/core/constants';

@Injectable({ providedIn: 'root' })
export class ResourceUrlService {

    constructor() { }

    public get loginResource(): string { return environment.basePath + '/api/oauth/token'; }
    public get publicKeyResource(): string { return environment.basePath + ApiConstants.apiV1 + '/cryptography/login/generatepublickey'; }
    public get userDetailsResource(): string { return environment.basePath + ApiConstants.apiV1 + '/userdetails'; }

}