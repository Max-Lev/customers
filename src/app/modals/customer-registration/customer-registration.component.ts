import { Customer, ICustomer } from './../../models/customer.model';
import { CustomersStoreService } from './../../shared/customers-store.service';
import { EditCustomerFormBuilderService } from './../services/edit-customer-form-builder.service';
import { CUSTOMER_REGISTRATION } from './../../models/modal.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../../shared/shared.service';
import { AfterViewInit, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectorRef, ContentChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ModalDirective, ActiveDirective } from 'angular-bootstrap-md';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { CreateCustomerFormBuilderService } from '../services/create-customer-form-builder.service';


@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],

})
export class CustomerRegistrationComponent implements OnInit, AfterViewInit, AfterContentInit {

  customerEditMode: boolean;

  subscription: Subscription;

  customerRegistrationForm: FormGroup;

  @ViewChildren(ActiveDirective) mdbActiveList: QueryList<ActiveDirective>;

  @ViewChild(ModalDirective) mdbModal: ModalDirective;

  orders_FormArray_List: FormArray;

  ordersListCounter$: Subject<number> = new Subject();

  constructor(public viewContainerRef: ViewContainerRef, private formBuilderService: CreateCustomerFormBuilderService,
    private editCustomerFormBuilderService: EditCustomerFormBuilderService, private ref: ChangeDetectorRef,
    private sharedService: SharedService, private customersStoreService: CustomersStoreService) {
    this.customerRegistrationForm = this.formBuilderService.customer_RegistrationFormBuilder();
    this.orders_FormArray_List = this.formBuilderService.get_CustomerOrdersList(this.customerRegistrationForm);
  };

  ngOnInit() {
    this.customerRegistrationModalState$();
    this.customerEditFormBuilder();
    console.log(this.customerRegistrationForm)
  };

  ngAfterViewInit(): void {
    this.formOrdersCounter$();
  };

  ngAfterContentInit(): void { };

  submitForm() {
    if (this.customerRegistrationForm.valid) {
      if (this.customerEditMode) {
        // EDIT CUSTOMER
        this.updateCustomer();
        this.customerRegistrationForm.reset({});
        this.hideModal();
      } else {
        // REGISTER CUSTOMER
        this.sharedService.customerCreator(this.customerRegistrationForm.value);
        this.reset_form_mdbActive();
      }
    } else {
      return;
    };
  };

  // ===== EDIT CUSTOMER FN ==== //

  customerEditFormBuilder() {
    if (this.customerEditMode) {
      this.customerRegistrationForm = this.editCustomerFormBuilderService.customer_EditFormBuilder();
      const customer = this.sharedService.getActiveCustomer();
      this.customerRegistrationForm.controls['customerName'].setValue(customer.customerName);
      this.customerRegistrationForm.controls['customerEmail'].setValue(customer.customerEmail);
      this.customerRegistrationForm.controls['customerPhone'].setValue(customer.customerPhone);
      this.ref.detectChanges();
    }
  };

  updateCustomer() {
    const activeCustomer = this.sharedService.getActiveCustomer();
    const customer: ICustomer = {
      customerID: activeCustomer.customerID,
      customerName: this.customerRegistrationForm.controls['customerName'].value,
      customerPhone: this.customerRegistrationForm.controls['customerPhone'].value,
      customerEmail: this.customerRegistrationForm.controls['customerEmail'].value,
      customerOrders: activeCustomer.customerOrders
    };
    const cust = new Customer(customer);
    this.customersStoreService.update_CustomerDataStorage(cust);
  };

  deleteCustomer() {
    const customer = <Customer>this.sharedService.getActiveCustomer();
    this.customersStoreService.delete_Customer(customer);
    this.hideModal();
  };
  // ===== EDIT CUSTOMER FN ==== //

  // ===== REGISTER CUSTOMER FN ==== //

  addOrder() {
    this.ordersListCounter$.next(this.orders_FormArray_List.length);
    this.orders_FormArray_List.push(this.formBuilderService.orders_FormGroupBuilder());
  };

  removeOrder(orderIndex: number) {
    this.ordersListCounter$.next(this.orders_FormArray_List.length);
    this.orders_FormArray_List.removeAt(orderIndex);
  };

  formOrdersCounter$() {
    this.subscription = this.ordersListCounter$.subscribe((counter) => {
      const ordersCountState = (this.orders_FormArray_List.length <= this.ordersListSize)
        ? this.orders_FormArray_List.enable() : this.orders_FormArray_List.disable();
    });
  };

  get ordersListSize() {
    return 3;
  };

  reset_form_mdbActive() {
    this.customerRegistrationForm = this.formBuilderService.customer_RegistrationFormBuilder();
    this.customerRegistrationForm.reset({});
    this.orders_FormArray_List = this.formBuilderService.get_CustomerOrdersList(this.customerRegistrationForm);
    this.ref.detectChanges();
    this.mdbActiveList.map(el => el.onBlur());
  };

  // ===== REGISTER CUSTOMER FN ==== //

  // ========= MODAL FN ========= //

  customerRegistrationModalState$() {
    this.subscription = this.mdbModal.onHide.subscribe((state) => {
      this.sharedService.set_ModalState$({ isOpen: false, modalName: CUSTOMER_REGISTRATION })
    });
  };

  hideModal() {
    this.ref.detectChanges();
    this.mdbModal.hide();
  };

  showModal() {
    this.ref.detectChanges();
    this.mdbModal.show();
  };

  // ========= MODAL FN ========= //




};
