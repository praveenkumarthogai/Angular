import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from 'src/app/customer-list/customer-list.component';
import { CustomerContactsComponent } from '../customer-contacts/customer-contacts.component';
import { IndividualCustomerComponent } from '../individual-customer/individual-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    children: [
    
      { path: 'specificCustomer/:id', component: IndividualCustomerComponent }
    ]

  },
  {
    path: 'contacts',
    component: CustomerContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
