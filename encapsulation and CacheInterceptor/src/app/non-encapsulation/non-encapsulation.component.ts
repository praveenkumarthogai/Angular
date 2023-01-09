import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-non-encapsulation',
  templateUrl: './non-encapsulation.component.html',
  styleUrls: ['./non-encapsulation.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NonEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
