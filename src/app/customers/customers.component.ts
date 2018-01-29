import { Orders_Cloth, Orders_Electronics } from './../models/orders_category';
import { Component, OnInit } from '@angular/core';
import { Orders_Category } from '../models/orders_category';
import { Customer_Mock } from '../models/data/customers-list.mock';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  _Category = new Map();
  _Customer_Mock: any = Customer_Mock;

  constructor() { };

  ngOnInit() {
    console.log(this._Customer_Mock)
  };




}
