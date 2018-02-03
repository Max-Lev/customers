import { ICustomer, IOrder, Customer } from './../../models/customer.model';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnChanges {

  @Input() customer: ICustomer;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log('customer input: ', this.customer);
    // console.log('customer - orders: ', this.customer.customerOrders);
  };

}
