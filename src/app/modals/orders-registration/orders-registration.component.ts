import { Customer, ICustomer, Order } from './../../models/customer.model';
import { SharedService } from './../../shared/shared.service';
import { CustomersStoreService } from './../../shared/customers-store.service';
import { ActivatedRoute } from '@angular/router';
import { OrdersFormBuilderService } from './../services/orders-form-builder.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormGroup, FormArray } from '@angular/forms';

import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-orders-registration',
  templateUrl: './orders-registration.component.html',
  styleUrls: ['./orders-registration.component.scss']
})
export class OrdersRegistrationComponent implements OnInit {

  ordersRegistrationForm: FormGroup;

  customer: ICustomer;

  customerOrders: Array<Order> = [];

  ordersList: FormArray;

  // tslint:disable-next-line:no-inferrable-types
  ordersListSize: number = 3;

  @ViewChild(ModalDirective) mdbModal: ModalDirective;

  constructor(private ref: ChangeDetectorRef, private activatedRoute: ActivatedRoute,
    private sharedService: SharedService, private customersStoreService: CustomersStoreService,
    private ordersFormBuilderService: OrdersFormBuilderService) {

    this.ordersRegistrationForm = this.ordersFormBuilderService.buildForm();
    this.ordersList = this.ordersFormBuilderService.get_CustomerOrdersList(this.ordersRegistrationForm);

  };

  ngOnInit() {
    this.getOrderData();
  };

  getOrderData() {
    this.customer = this.sharedService.getActiveCustomer();
    this.customerOrders = this.customer.customerOrders;
    this.ordersList.controls = [];

    this.customerOrders.map((order, k) => {

      this.ordersList.push(this.ordersFormBuilderService.orders_FormGroupBuilder());
      this.ordersList.controls[k]['controls'].product.setValue(order.product);

    });
  };

  addOrder() {
    this.ordersList.push(this.ordersFormBuilderService.orders_FormGroupBuilder());
  };

  removeOrder(orderIndex: number) {
    this.ordersList.removeAt(orderIndex);
  };

  saveOrder() {
    debugger;
  };

  showModal() {
    this.ref.detectChanges();
    this.mdbModal.show();
  };

  hideModal() {
    this.mdbModal.hide();
  };

}
