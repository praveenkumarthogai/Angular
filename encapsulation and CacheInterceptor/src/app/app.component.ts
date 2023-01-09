import { Component, OnInit } from '@angular/core';
import { TestService } from './CacheInterceptors/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _service: TestService) {

  }

  ngOnInit(): void {
    this._service.getData(true);
  }


  callTestService(){
    this._service.getData(true);
  }
  title = 'encapsulation';
}
