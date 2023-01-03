import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {

  randomNumber: Number = 0;
  typeSomething: string = '';
  marks: Number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.PassDataToChildComponent_usingSetInterval()
  }


  PassDataToChildComponent_usingSetInterval() {
    //    setInterval(() => {
    // this.randomNumber = Math.random();
    //this.marks.push(Math.random());  // change detection won't work due to mutation
    //}, 2000)
  }

  PassDataToChildComponent() {
    this.marks = [Math.random()];  //change detection works
  }

  parentMethod() {
    console.log("parent component re render");
  }

}
