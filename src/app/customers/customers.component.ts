import { ICustomer, Customer } from './../models/customer.model';
import { SharedService } from './../shared/shared.service';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Customer_Mock } from '../models/data/customers-list.mock';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent implements OnInit, AfterViewInit, OnDestroy {

  subscription: Subscription;
  _Category = new Map();
  _Customer_Mock: any = Customer_Mock;
  customersList: Customer[] = [];
  constructor(private sharedService: SharedService, private ref: ChangeDetectorRef) { };

  ngOnInit() {
    this.customerRegistration$();
    this.customersList = this._Customer_Mock;
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

  ngAfterViewInit(): void {

  };

  customerRegistration$() {
    this.subscription = this.sharedService.customer$.subscribe((customer: Customer) => {
      console.log('customer: ', customer);
      debugger;
      this.customersList.push(customer);
      this.ref.detectChanges();
      return customer;
    });
  };


}
