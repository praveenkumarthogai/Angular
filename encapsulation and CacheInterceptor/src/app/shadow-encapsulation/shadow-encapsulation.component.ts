import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-encapsulation',
  templateUrl: './shadow-encapsulation.component.html',
  styleUrls: ['./shadow-encapsulation.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ShadowEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
