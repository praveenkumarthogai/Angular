import { Component, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit,OnChanges {

  constructor(private _ngZone:NgZone) { }

  ngOnChanges(changes: SimpleChanges): void {
  console.log('ng onchanges')
  }

  ngOnInit(): void {
    console.log('renders');

   this._ngZone.runOutsideAngular(()=>{
    this.testngZone();
   })

  }

  

  testngZone() {
    setInterval(() => {
      console.log('set interval')
    }, 2000)
  }

}
