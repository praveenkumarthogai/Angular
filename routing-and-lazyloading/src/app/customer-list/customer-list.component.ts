import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSpecificCustomer() {
    //this.router.navigate(['specificCustomer/1'], { relativeTo: this._route });
    //this.router.navigateByUrl('/orders');
  }

  //router.navigateByUrl(' ---- String ----');

 //router.navigate([], {relativeTo: route})

}
