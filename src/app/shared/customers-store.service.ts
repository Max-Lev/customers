import { Subject } from 'rxjs/Subject';
import { Customer, ICustomer } from './../models/customer.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomersStoreService {

  customersMap: Map<any, any> = new Map();

  customersSet: Set<Customer> = new Set();

  customersKeyType = 'customerID:';

  customerStore$: Subject<Customer> = new Subject();

  constructor() {
    this.getStorage();
  };

  setStorage() {
    this.customersMap.forEach((customer: ICustomer) => {
      localStorage.setItem(`${this.customersKeyType}${customer.customerID}`, JSON.stringify(customer));
    });
  };

  getStorage(): Array<Customer> | Customer {
    const storageKeys = Object.keys(localStorage);
    const keyslist = storageKeys.map((key) => key.match(`${this.customersKeyType}`));
    const matchdata = keyslist.filter(item => { if (item !== null) { return item.input } });
    const customerlist = matchdata.map((item) => JSON.parse(localStorage.getItem(item.input)));
    return customerlist;
  };

  getCustomerByID(custID: number): any {
    return (list: Array<Customer>) => {
      const customer: ICustomer = list.find(cust => cust.customerID === custID);
      return customer;
    }
  };

  customersViewRenderer(): Array<Customer> {
    return Array.from(this.customersMap.values());
  };

  set_CustomerDataStorage(list: Customer | Array<Customer>): any {
    return (customerData: any): Array<Customer> => {
      this.setStorage();
      return customerData;
    }
  };

  set_CustomerList(customersList: Array<Customer>): Array<Customer> {
    const list: Array<Customer> = customersList.map((cust) => {
      this.customersSet.add(new Customer(cust));
      this.customersMap.set(cust.customerID, new Customer(cust));
      return new Customer(cust);
    });
    return list;
  };

  set_Customer(cust: Customer): Customer {
    cust.customerID = this.setCustomerID();
    this.customersSet.add(new Customer(cust));
    this.customersMap.set(cust.customerID, new Customer(cust));
    return cust;
  };

  update_CustomerDataStorage(customer: Customer) {
    localStorage.removeItem(`${this.customersKeyType}${customer.customerID}`);
    localStorage.setItem(`${this.customersKeyType}${customer.customerID}`, JSON.stringify(customer));
    this.customerStore$.next(customer);
  };

  setCustomerID(): number {
    if (this.customersMap.size === 0) {
      return 1;
    } else {
      const keys = this.customersMap.keys();
      const list = Array.from(keys);
      const maxID = Math.max(...list);
      return maxID + 1;
    }
  };

  delete_Customer(customer: Customer) {
    localStorage.removeItem(`${this.customersKeyType}${customer.customerID}`);
    this.customersMap.delete(customer.customerID)
    this.customerStore$.next(customer);
  };

}
