import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulate-encapsulation',
  templateUrl: './emulate-encapsulation.component.html',
  styleUrls: ['./emulate-encapsulation.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class EmulateEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
