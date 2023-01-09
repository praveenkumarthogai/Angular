import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  headers: HttpHeaders;
  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders()

  }


  getData(isCache:boolean) {
    if(isCache){
      this.headers = new HttpHeaders({ 'cacheRequest': 'true' })

    }
    this._http.get('https://jsonplaceholder.typicode.com/posts', { headers: this.headers }).subscribe((x) => {
      console.log(x)
    })
  }
}
