import { ICustomer } from './../models/customer.model';
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

  customerOrdersForm: FormGroup;

  ordersList: FormArray;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private sharedService: SharedService,
    private customersStoreService: CustomersStoreService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const customerID = this.activatedRoute.children[0].snapshot.params;
    this.getOrderData(customerID.id);
  };

  ngAfterViewInit(): void {

  };

  getOrderData(customerID: string) {

    // const selectedCustomer: ICustomer = this.customersStoreService.customersMap.get(customerID);
    const selectedCustomer: ICustomer = this.customersStoreService.getStorage()
      (this.customersStoreService.getCustomerByID('2'));
    debugger;
  };




}
