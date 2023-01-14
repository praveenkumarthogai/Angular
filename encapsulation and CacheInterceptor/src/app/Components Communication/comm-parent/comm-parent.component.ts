import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { CommChildComponent } from '../comm-child/comm-child.component';
import { CommSessionService } from '../comm-session.service';

@Component({
  selector: 'app-comm-parent',
  templateUrl: './comm-parent.component.html',
  styleUrls: ['./comm-parent.component.css']
})
export class CommParentComponent implements OnInit, AfterViewInit, OnChanges {


  //   // Ensure Change Detection runs before accessing the instance
  // @ContentChild('foo', { static: false }) foo!: ElementRef;

  // // If you need to access it in ngOnInit hook
  // @ViewChild(TemplateRef, { static: true }) foo!: TemplateRef;

  // @ViewChildren(HelloComponent) hellos: QueryList<any>;

  // ngAfterViewInit() {

  //    this.hellos.forEach(hello => console.log(hello));

  // }
  message: string = '';
  // If you need to access it in ngOnInit hook
  @ViewChild(CommChildComponent, { static: true }) commChildComponent!: CommChildComponent;
  constructor(private _session: CommSessionService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent ngonchanges');
  }


  ngAfterViewInit(): void {
    this.commChildComponent.viaViewChildAndAfterViewInit = 'message from viaViewChildAndAfterViewInit'
  }

  ngOnInit(): void {
    this._session.setData()
  }



  updateMessage() {
    this.message = "message received from parent";
  }

  getMessageFromChild(data: any) {
    console.log(data)
  }




}
