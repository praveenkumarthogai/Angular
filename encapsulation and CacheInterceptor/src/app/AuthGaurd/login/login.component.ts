import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { canComponentDeactivate } from '../candeactivate-gaurd.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private _loginService: LoginService,private _route:Router) { }

  ngOnInit(): void {
  }

  login() {
    this._loginService.setLogin();
    this._route.navigateByUrl('dashboard');
  }

}
