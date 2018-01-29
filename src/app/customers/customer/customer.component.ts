import { ICustomer, IOrder } from './../../models/customer.model';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnChanges {

  @Input() customer: ICustomer;
  _customerOrders: IOrder[];
  hideElement: boolean = true;

  constructor() { }

  ngOnInit() {

  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log('customer: ', this.customer);
    console.log('customer - orders: ', this.customer.Customer_Orders);
  };

  click() {
    console.log('click');
  };

  selectedOption(name: string, id: number) {
    console.log(name);
  };


}
