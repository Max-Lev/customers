import { CustomersStoreService } from './../shared/customers-store.service';
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

  _Customer_Mock: any = Customer_Mock;

  customersListContainer: Array<Customer> = [];

  constructor(private sharedService: SharedService, private customersStoreService: CustomersStoreService,
    private ref: ChangeDetectorRef) { };

  ngOnInit() {
    this.loadRegisteredCustomers();
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

  ngAfterViewInit(): void {
    this.customerRegistration$();
  };

  loadRegisteredCustomers() {
    this.customersListContainer = this.customersStoreService.set_CustomerDataStorage(this._Customer_Mock)
      (this.customersStoreService.set_CustomerList(this._Customer_Mock));
    console.log('this.customersListContainer: ', this.customersListContainer);
  };

  addCustomerRegistration(customer: Customer) {
    this.customersStoreService.set_CustomerDataStorage(customer)(this.customersStoreService.set_Customer(customer));
  };

  customerRegistration$() {
    this.subscription = this.sharedService.customer$.subscribe((customer: Customer) => {
      this.addCustomerRegistration(customer);
      this.customersListContainer.push(customer);
      this.ref.detectChanges();
      console.log('this.customersListContainer: ', this.customersListContainer);
      return customer;
    });
  };


}
