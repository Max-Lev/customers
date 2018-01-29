import { SharedModule } from './../shared/shared.module';
import { BsDropdownModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

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
    SharedModule
  ],
  declarations: [
    CustomersComponent,
    CustomerComponent
  ],
  providers: [

  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
