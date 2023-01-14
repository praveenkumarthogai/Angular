import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = true;
  constructor() { }

  setLogin() {
    this.isLoggedIn = true;
  }

  getLogin(): boolean {
    return this.isLoggedIn;
  }
}

//TODO - canLoad | canPrefetch
