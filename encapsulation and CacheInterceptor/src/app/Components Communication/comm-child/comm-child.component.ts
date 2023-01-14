import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommSessionService } from '../comm-session.service';

@Component({
  selector: 'app-comm-child',
  templateUrl: './comm-child.component.html',
  styleUrls: ['./comm-child.component.css']
})
export class CommChildComponent implements OnInit, OnChanges {

  viaViewChildAndAfterViewInit : string = '';
  @Input() message: string = '';
  @Output() parentEmitter = new EventEmitter<string>();
  constructor(private _sessionService: CommSessionService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child component onchanges triggers');
    console.log(this.message);
  }

  ngOnInit(): void {
    console.log(this._sessionService.getData(),'data from session service');
  }


  emitValueToParent(){
    this.parentEmitter.emit('message from child by output emiiter');
  }




}
