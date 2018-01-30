import { Observable } from 'rxjs/Observable';
import { SharedService } from './../../shared/shared.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Query } from '@angular/compiler/src/core';
import { ContentChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { CUSTOMER_REGISTRATION } from '../../models/modal.model';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],

})
export class CustomerRegistrationComponent implements OnInit, AfterViewInit {

  subscription: Subscription;

  @ViewChild(ModalDirective) modal: ModalDirective;

  customerRegistration: FormGroup;

  // orders: Array<string> = new Array(4);

  constructor(private sharedService: SharedService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.modalConfig();
    this.buildRegistrationForm();
  };

  ngAfterViewInit(): void { };

  buildRegistrationForm() {

    this.customerRegistration = this.formBuilder.group({
      customerName: new FormControl('max', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      customerPhone: new FormControl('0739257517', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),

      customerOrders: this.formBuilder.group({
        order1: new FormControl('Pents'),
        order2: new FormControl('Shoes'),
      }),
      Orders: this.formBuilder.array([this.buildCustomerOrders_FormGroup()])
      // customerAddresses: this.formBuilder.array([this.buildAddress()])
    });

    this.Orders = <FormArray>this.customerRegistration.get('Orders');
    console.log('this.Orders: ', this.Orders.controls[0]['controls'])
    this.Orders = this.Orders.controls[0]['controls'];
  };

  addCustomerOrder() {

  };

  buildCustomerOrders_FormGroup(): FormGroup {

    console.log(this.customerRegistration)
    return this.formBuilder.group({
      order1: 'NY',
      order2: 'Berlin',
    });
  };

  // tslint:disable-next-line:member-ordering
  Orders: FormArray;

  // get Orders(): FormArray {
  //   console.log(this.customerRegistration)
  //   debugger;
  //   return <FormArray>this.customerRegistration.get('Orders');
  // };


  // buildAddress(): FormGroup {
  //   return this.formBuilder.group({
  //     street2: 'home',
  //     street1: '',
  //   });
  // }
  // get customerAddressList(): FormArray {
  //   return <FormArray>this.customerRegistration.get('customerAddresses');
  // };
  // // click event
  // addAddress(): void {
  //   this.customerAddressList.push(this.buildAddress());
  // };



  saveCustomer() {
    if (this.customerRegistration.valid) {
      this.customerRegistration;
      debugger;
    }
    else {
      this.customerRegistration;
      debugger;
    }
  };

  openModal() {
    this.modal.show();
  };

  onHide() {
    this.modal.hide();
    this.sharedService.set_customersModalState$({ isOpen: false, modalName: CUSTOMER_REGISTRATION });
  };

  modalConfig() {
    this.modal.config = {
      ignoreBackdropClick: true
    };
  };

};
