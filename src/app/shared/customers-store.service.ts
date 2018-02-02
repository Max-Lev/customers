import { Customer, ICustomer } from './../models/customer.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomersStoreService {

  customersMap: Map<any, any> = new Map();

  customersSet: Set<Customer> = new Set();

  customersKeyType = 'customerID:';

  constructor() {
    this.getStorage();
  };


  setStorage() {

    this.customersMap.forEach((customer: ICustomer) => {
      localStorage.setItem(`${this.customersKeyType}${customer.customerID}`, JSON.stringify(customer));
    });

  };

  getStorage(): any {
    debugger;
    return (): Array<Customer> => {
      const storageKeys = Object.keys(localStorage);
      const list = storageKeys.filter((item, i) => item === `${this.customersKeyType}${i}`);
      const customerList = list.map(item => JSON.parse(localStorage.getItem(item)));
      debugger;
      return customerList;
    }

  };

  getCustomerByID(id: string) {
    debugger;
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
    this.customersMap.set(this.setCustomerID(), new Customer(cust));
    return cust;
  };

  setCustomerID(): number {
    const size = this.customersMap.size;
    return size + 1;
  };

}
