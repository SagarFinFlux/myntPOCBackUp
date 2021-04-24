import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { catchError, switchMap, map, mergeMap, tap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';

// Newly Added
import { SecurePublicKeyResponse, SignInPayload, SignInResponse } from '../user/payload.model';
import { UserDetails } from '../user/user.details.model';
import { ResourceUrlService } from './authentication.resources.service';
import { environment } from 'environments/environment';
import { UserToken } from '../user/user.token.model';
import { AppError } from 'app/core/errors/app.error';
import { ErrorCode } from 'app/core/errors/codes.error';

@Injectable()
export class AuthService
{
    private _authenticated: boolean = false;

    // newly added
    userToken = new BehaviorSubject<UserToken>(null);
    userDetails = new BehaviorSubject<UserDetails>(null);

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private resourceService: ResourceUrlService,
    )
    {
    }



    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('access_token', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('access_token') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any>
    {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any>
    {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { email: string, password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post('api/auth/sign-in', credentials).pipe(
            switchMap((response: any) => {
                console.log(response);
                // Store the access token in the local storage
                this.accessToken = response.access_token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return a new observable with the response
                return of(response);
            })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any>
    {
        // Renew token
        return this._httpClient.post('api/auth/refresh-access-token', {
            access_token: this.accessToken
        }).pipe(
            catchError(() => {

                // Return false
                return of(false);
            }),
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.access_token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return true
                return of(true);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('access_token');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string, email: string, password: string, company: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string, password: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean>
    {
        // Check if the user is logged in
        if ( this._authenticated )
        {
            return of(true);
        }

        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }


            // Newly Added.
            private getPublicKey(username: string): Observable<SecurePublicKeyResponse> {
                const httpParams = new HttpParams().set('username', username);
                return this._httpClient
                    .post<SecurePublicKeyResponse>(this.resourceService.publicKeyResource, {}, { params: httpParams })
                    .pipe(
                        catchError(AppError.handleError)
                    );
            }
    
            private authenticateWithUsernamePassword(username: string, password: string, key: string): Observable<SignInResponse> {
                // const encryptedPassword = this.encryptUsingKey(password, key);
                const signInPayload = new SignInPayload(username, password, environment.client_id, environment.client_secret);
                return this._httpClient
                    .post<SignInResponse>(this.resourceService.loginResource, signInPayload)
                    .pipe(
                        catchError((errorRes) => {
                            console.log(errorRes);
                            //connect error
                            if (errorRes.status <= 0) {
                                return throwError(new AppError('Error in connecting to the server', ErrorCode.ERROR_CONNECT));
        
                            } else if (!!errorRes.error) {
                                if (errorRes.error.error_description === 'Bad credentials') {
                                    return throwError(new AppError('BadCredentials', ErrorCode.ERROR_BAD_CREDENTIAL));
                                }
        
                            }
                            return throwError(new AppError('Unknown Error', ErrorCode.ERROR_UNKNOWN));
                        })
                    );
        
            }
    
            private getAuthenticatedUserDetails(): Observable<UserDetails> {
                console.log('Inside Get Authenticated User Details Function');
                return this._httpClient.get<UserDetails>(this.resourceService.userDetailsResource).pipe(
                    catchError(AppError.handleError)
                );
            }
            
            login(username: string, password: string): Observable<any> {
                return this.getPublicKey(username).pipe(
                    map(keyResponse => {
                        return keyResponse.keyValue;
                    }),
                    mergeMap(publicKey => {
                        // Set the authenticated flag to true
                    this._authenticated = true;
                        return this.authenticateWithUsernamePassword(username, password, publicKey).pipe(
                            tap((signInResonse: SignInResponse) => {
                                this.handleAuthentication(username, signInResonse);
                            }),
                            mergeMap(() => {
                                return this.getAuthenticatedUserDetails().pipe(
                                    tap((userDetails: UserDetails) => {
                                        console.log(userDetails);
                                        this.handleUserDetails(userDetails);
                                    })
                                );
                            })
                        );
                    })
                );
            }
    
            private handleAuthentication(
                username: string,
                signInResponse: SignInResponse
            ) {
                // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
                const userToken = new UserToken(username,
                    signInResponse.access_token,
                    signInResponse.refresh_token,
                    signInResponse.expires_in);
                this.userToken.next(userToken);
                // this.autoLogout(expiresIn * 1000);
                localStorage.setItem('user-token', JSON.stringify(userToken));
                // this.logInUsingToken(signInResponse);
                console.log(userToken);
                this._authenticated = true;
            }
    
            private handleUserDetails(
                userDetails: UserDetails
            ) {
                this._userService.user = userDetails;
                this.userDetails.next(userDetails);
                localStorage.setItem('user-details', JSON.stringify(userDetails));
            }
    
            // Untll here
}
