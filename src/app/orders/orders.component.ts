import { IActiveModal, ORDERS_REGISTRATION } from './../models/modal.model';
import { ICustomer, Order, Customer } from './../models/customer.model';
import { CustomersStoreService } from './../shared/customers-store.service';
import { SharedService } from './../shared/shared.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  // customerOrdersForm: FormGroup;
  // ordersList: FormArray;
  selectedCustomer: ICustomer;

  customerOrders: Array<Order> = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
    private sharedService: SharedService, private customersStoreService: CustomersStoreService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getOrderData();
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.edit();
    }, 500);
  };

  getOrderData() {
    const customerID = this.activatedRoute.children[0].snapshot.params;
    this.selectedCustomer = this.customersStoreService.getCustomerByID(+customerID.id)(this.customersStoreService.getStorage());
    console.log('selectedCustomer: ', this.selectedCustomer);
    this.customerOrders = this.selectedCustomer.customerOrders;
    this.sharedService.setActiveCustomer(this.selectedCustomer);
  };

  edit() {
    const activeComponent: IActiveModal = { isOpen: true, modalName: ORDERS_REGISTRATION };
    this.sharedService.set_ModalState$(activeComponent);
  };




}
