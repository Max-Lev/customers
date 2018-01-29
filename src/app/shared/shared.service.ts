import { Customer_Mock } from './../models/data/customers-list.mock';
import { Injectable } from '@angular/core';
import { ICustomer } from '../models/customer.model';

@Injectable()
export class SharedService {

  constructor() { };

  set_LocalStorage_Data() {
    const data: ICustomer[] = Customer_Mock;
    debugger;
  };

}
