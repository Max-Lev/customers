import { ModalsModule } from './../modals/modals.module';
import { SharedService } from './../shared/shared.service';
import { BsDropdownModule, MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { BadgeComponent } from './customer/badge/badge.component';
import { SharedModule } from './../shared/shared.module';
const routes: Routes = [
  {
    path: '', component: CustomersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule,
    // !!! ModalsModule.forRoot()
  ],
  declarations: [
    CustomersComponent,
    CustomerComponent,
    BadgeComponent
  ],
  providers: [

  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
