import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerContactsComponent } from '../customer-contacts/customer-contacts.component';
import { IndividualCustomerComponent } from '../individual-customer/individual-customer.component';


@NgModule({
  declarations: [
    CustomerContactsComponent,
    IndividualCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
