import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-temlate',
  templateUrl: './ng-temlate.component.html',
  styleUrls: ['./ng-temlate.component.css']
})
export class NgTemlateComponent implements OnInit {

  isvalid:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

}
