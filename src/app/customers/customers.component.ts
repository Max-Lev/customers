import { CUSTOMER_EDIT_MODE } from './../models/modal.model';
import { CustomersStoreService } from './../shared/customers-store.service';
import { ICustomer, Customer } from './../models/customer.model';
import { SharedService } from './../shared/shared.service';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Customer_Mock } from '../models/data/customers-list.mock';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { IActiveModal } from '../models/modal.model';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent implements OnInit, AfterViewInit, OnDestroy {

  subscription: Subscription;

  customersData: any;

  customersListContainer: Array<Customer> = [];

  constructor(private sharedService: SharedService, private customersStoreService: CustomersStoreService,
    private ref: ChangeDetectorRef) { };

  ngOnInit() {
    this.loadRegisteredCustomers();
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.ref.detach()
  };

  ngAfterViewInit(): void {
    this.customerRegistration$();
    this.customerState$();
  };

  loadRegisteredCustomers() {
    const customersData: any = this.customersStoreService.getStorage();
    this.customersListContainer = this.customersStoreService.set_CustomerDataStorage(customersData)
      (this.customersStoreService.set_CustomerList(customersData));
  };

  customerRegistration$() {
    this.subscription = this.sharedService.customerRegistration$.subscribe((customer: Customer) => {
      this.addCustomerRegistration(customer);
      this.customersListContainer.push(customer);
      this.ref.markForCheck();
      return customer;
    });
  };

  addCustomerRegistration(customer: Customer) {
    this.customersStoreService.set_CustomerDataStorage(customer)(this.customersStoreService.set_Customer(customer));
  };

  customerState$() {
    this.subscription = this.customersStoreService.customerStore$.subscribe((cust: Customer) => {
      this.customersListContainer = <Array<Customer>>this.customersStoreService.getStorage();
      this.ref.detectChanges();
      return cust;
    });
  };

  editCustomerEventHandler(cust: Customer) {
    const state: IActiveModal = { isOpen: true, modalName: CUSTOMER_EDIT_MODE };
    this.sharedService.setActiveCustomer(cust);
    this.sharedService.set_ModalState$(state);
  };



}
