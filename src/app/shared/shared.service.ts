import { FormControl } from '@angular/forms';
import { Customer, ICustomer } from './../models/customer.model';
import { Customer_Mock } from './../models/data/customers-list.mock';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IActiveModal, CUSTOMER_REGISTRATION } from '../models/modal.model';

@Injectable()
export class SharedService {

  customerModalAction: IActiveModal = { isOpen: false, modalName: CUSTOMER_REGISTRATION };

  customerModalState$: BehaviorSubject<IActiveModal> = new BehaviorSubject<IActiveModal>(this.customerModalAction);

  customer: Subject<any> = new Subject();

  customerRegistration$ = this.customer.asObservable();

  activeCustomer: ICustomer;

  navClose$: Subject<boolean> = new Subject();

  constructor() { };

  set_ModalState$(state: IActiveModal) {
    this.customerModalState$.next(state);
  };

  customerCreator(registrationData: Array<FormControl>): Observable<Customer> {
    const customerProfile: ICustomer = Object.assign(registrationData);
    const customer: ICustomer = new Customer(customerProfile);
    this.customer.next(customer);
    return this.customer;
  };

  setActiveCustomer(customer: ICustomer) {
    this.activeCustomer = customer;
  };

  getActiveCustomer(): ICustomer {
    return this.activeCustomer;
  };

  autoCloseNav$(): Observable<boolean> {
    this.navClose$.next(false);
    return this.navClose$;
  };

}
