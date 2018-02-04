import { Subscription } from 'rxjs/Subscription';
import { IActiveModal, ORDERS_REGISTRATION } from './../models/modal.model';
import { ICustomer, Order, Customer } from './../models/customer.model';
import { CustomersStoreService } from './../shared/customers-store.service';
import { SharedService } from './../shared/shared.service';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit, OnDestroy {

  subscription: Subscription;

  selectedCustomer: ICustomer;

  customerOrders: Array<Order> = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
    private sharedService: SharedService, private customersStoreService: CustomersStoreService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getOrderData();
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

  ngAfterViewInit(): void {
    this.ordersState$();
  };

  getOrderData() {
    if (this.activatedRoute.children[0] !== undefined) {
      const customerID = this.activatedRoute.children[0].snapshot.params;
      this.selectedCustomer = this.customersStoreService.getCustomerByID(+customerID.id)(this.customersStoreService.getStorage());
      if (this.selectedCustomer !== undefined) {
        this.customerOrders = this.selectedCustomer.customerOrders;
        this.sharedService.setActiveCustomer(this.selectedCustomer);
      } else {
        this.router.navigate(['Customers']);
      }
    } else {
      this.router.navigate(['Customers']);
    }
  };

  ordersState$() {
    this.subscription = this.customersStoreService.customerStore$.subscribe((cust: Customer) => {
      this.customerOrders = cust.customerOrders;
      return cust;
    });
  };

  edit() {
    const activeComponent: IActiveModal = { isOpen: true, modalName: ORDERS_REGISTRATION };
    this.sharedService.set_ModalState$(activeComponent);
  };


}
