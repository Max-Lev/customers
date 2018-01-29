import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICustomer } from '../../../models/customer.model';

@Component({
  selector: 'app-badge',
  template: `
  <span *ngIf="customerOrdersCounter.Customer_Orders.length>0"
  [innerText]="customerOrdersCounter.Customer_Orders.length"
  class="badge badge-danger badge-pill"></span>
  `,
  styles: [`
  :host{position: absolute;right: -10px;top: -5px;}
  `]
})
export class BadgeComponent implements OnInit, OnChanges {

  @Input() customerOrdersCounter: ICustomer;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {

  }

}