import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input('randomNumber') randomNumber: Number = 123;
  @Input('marks') marks: Number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  childMethod() {
    console.log("child component re render");
  }


}
