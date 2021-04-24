import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'app/core/user/user.model';
import { UserDetails } from 'app/core/user/user.details.model';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private _user: ReplaySubject<UserDetails> = new ReplaySubject<UserDetails>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    // set user(value: User)
    // {
    //     // Store the value
    //     this._user.next(value);
    // }

    // get user$(): Observable<User>
    // {
    //     return this._user.asObservable();
    // }
    set user(value: UserDetails)
    {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<UserDetails>
    {
        return this._user.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the user
     *
     * @param user
     */
    // update(user: User): Observable<any>
    // {
    //     return this._httpClient.patch<User>('api/common/user', {user}).pipe(
    //         map((response) => {
    //             // Execute the observable
    //             this._user.next(response);
    //         })
    //     );
    // }
    update(user: UserDetails): Observable<any>
    {
        return this._httpClient.patch<UserDetails>('api/common/user', {user}).pipe(
            map((response) => {
                // Execute the observable
                this._user.next(response);
            })
        );
    }
}
