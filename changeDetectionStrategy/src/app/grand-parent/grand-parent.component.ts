import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.scss']
})
export class GrandParentComponent implements OnInit {

  typeSomething:string='';
  constructor() { }

  ngOnInit(): void {
  }

  grandParentMethod(){
    console.log("grand parent re render");
  }

}
