import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommSessionService {
  apiResult: any[] = [];
  constructor() { }

  setData() {
    this.apiResult = [{ message: 'success' }, { message: 'partially success' }]
  }

  getData(){
    return this.apiResult;
  }
}
