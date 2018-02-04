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

  customer: Customer;

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
    this.getOrderData_FormArrayBinding();
  };

  getOrderData_FormArrayBinding() {
    this.customer = <Customer>this.sharedService.getActiveCustomer();
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

  submitForm() {
    if (this.ordersRegistrationForm.valid) {
      this.updateOrdersState$()
    } else {
      return;
    }
  };

  updateOrdersState$() {
    this.customerOrders = this.ordersRegistrationForm.value['customerOrders'];
    this.customer.customerOrders = this.ordersRegistrationForm.value['customerOrders'];
    this.customersStoreService.update_CustomerDataStorage(this.customer);
    this.hideModal();
  };

  showModal() {
    this.ref.detectChanges();
    this.mdbModal.show();
  };

  hideModal() {
    this.mdbModal.hide();
  };

}
