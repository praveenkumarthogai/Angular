import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class SubChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
