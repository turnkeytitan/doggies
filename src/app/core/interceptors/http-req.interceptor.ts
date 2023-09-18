import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    var res = next.handle(request);

    res.pipe(
      catchError((error: HttpErrorResponse) => {
        // process the obtained error
        // for logging or monitoring
        console.log('Interceptor Log: ' + error.message);

        // create new Observable stream
        // which the clients
        // can subscribe and
        // catch the Erroneous response
        return throwError(() => new Error('error in the request'));
      })
    );
    return next.handle(request);
  }
}
