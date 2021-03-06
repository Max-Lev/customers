import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICustomer } from '../../../models/customer.model';

@Component({
  selector: 'app-badge',
  template: `
  <span *ngIf="customerOrdersCounter.customerOrders?.length>0"
  [innerText]="customerOrdersCounter.customerOrders.length"
  class="badge badge-danger badge-pill"></span>
  `,
  styles: [`:host{position: absolute;right: -0.5em;top: -0.5em;}`]
})
export class BadgeComponent implements OnInit, OnChanges {

  @Input() customerOrdersCounter: ICustomer;

  constructor() { }

  ngOnInit() { };

  ngOnChanges(): void { };

}
