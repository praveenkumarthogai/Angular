import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-random-component',
  templateUrl: './random-component.component.html',
  styleUrls: ['./random-component.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class RandomComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
