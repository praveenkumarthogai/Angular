import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  cacheMap = new Map<any, any>(null)


  constructor() { }


  getFromCache(req: HttpRequest<any>): HttpResponse<any> | undefined {
    console.log('getFromCache');
    const url = req.urlWithParams;
    debugger;
    const cachedResponse = this.cacheMap.get(url);
    if (!cachedResponse) {
      debugger;
      return undefined;
    }
    return cachedResponse.res;
  }


  addToCache(req: HttpRequest<any>, res: HttpResponse<any>) {
    const url = req.urlWithParams;
    const entry = { url, res, addedTime: new Date() }
    this.cacheMap.set(url,entry);

  }
}
