import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { canComponentDeactivate } from '../candeactivate-gaurd.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, canComponentDeactivate {

  constructor() { }
  canDeactivate() {
    return confirm("are u sure want to leave this page? ");
  }

  ngOnInit(): void {
  }

}
