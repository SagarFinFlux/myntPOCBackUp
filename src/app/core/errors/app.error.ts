import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ErrorCode } from './codes.error';

export class AppError {
    constructor(private message: string, private code: string) {
    }

    get errorCode(): string {
        if (!!this.code) {
            return this.code;
        } else {
            return ErrorCode.ERROR_UNKNOWN;
        }
    }

    static handleError(errorRes: HttpErrorResponse): Observable<never> {
        alert('IN Error Handle Function');
        let errorCode = ErrorCode.ERROR_UNKNOWN;
        let errorMessage = 'Unknown Error';
        console.log(errorRes);
        if (errorRes.status <= 0) {
            errorCode = ErrorCode.ERROR_UNKNOWN;
            errorMessage = 'Error in connecting to the server';
            console.log('An error occurred while connecting to the host', errorMessage);
        }
        return throwError(new AppError(errorMessage, errorCode));
    }

}
