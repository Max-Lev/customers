import { ICustomer, IOrder, Customer } from './../../models/customer.model';
import { Component, OnInit, Input, SimpleChanges, Output } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnChanges {

  @Input() customer: ICustomer;

  @Output() editCustomerEvent: EventEmitter<Customer> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log('customer input: ', this.customer);
    // console.log('customer - orders: ', this.customer.customerOrders);
  };

  editCustomer(customer) {
    this.editCustomerEvent.emit(customer);
  };

}
