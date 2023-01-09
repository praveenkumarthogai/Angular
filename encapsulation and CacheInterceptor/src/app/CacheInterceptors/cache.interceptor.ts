import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { CacheService } from './cache.service'

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private _cacheService: CacheService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //Do  not cache if except get request

    if (request.method !== 'GET') {
      return next.handle(request);
    }

        // delete cache if no header is set by service's method
        if (!request.headers.get('cacheRequest')) {
          if (this._cacheService.cacheMap.get(request.urlWithParams)) {
            this._cacheService.cacheMap.delete(request.urlWithParams);
          }
    
          return next.handle(request);
        }
    
        // Checked if there is cached data for this URI
        const cachedResponse = this._cacheService.getFromCache(request);
        if (cachedResponse) {
          // In case of parallel requests to same URI,
          // return the request already in progress
          // otherwise return the last cached data
          console.log('response from cache');
          return (cachedResponse instanceof Observable) ? cachedResponse : of(cachedResponse.clone());
        }
    
        // If the request of going through for first time
        // then let the request proceed and cache the response
        return next.handle(request)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this._cacheService.addToCache(request, event);
                }
            }));




  }
}
