import { Customer_Mock } from './../models/data/customers-list.mock';
import { Injectable } from '@angular/core';
import { ICustomer } from '../models/customer.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

  public customerCreateState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

  };

  createCustomer(state: boolean) {
    console.log('create customer');
    this.customerCreateState$.next(state);
  };


  set_LocalStorage_Data() {
    const data: ICustomer[] = Customer_Mock;

    const listMap = new Map();
    // data.forEach(item => {
    //   listMap.set(item.Customer_Name, item.Customer_Orders);
    //   console.log('listMap: ', listMap);
    //   // localStorage.setItem(item.Customer_Name,
    //   //   JSON.stringify({ Customer_ID: item.Customer_ID, Customer_Orders: item.Customer_Orders }));
    //   localStorage.setItem(`${item.Customer_ID}`, JSON.stringify(item));
    // });

  }

  is_CustomerStorage(customerName: string): string | boolean {
    const data = this.getLS(customerName);
    console.log(data);
    return data;
  }

  getLS(name: string): string {
    //  const keys = localStorage.key();
    return name;
  }







}
