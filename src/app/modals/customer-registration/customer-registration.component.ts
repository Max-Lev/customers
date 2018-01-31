import { CUSTOMER_REGISTRATION } from './../../models/modal.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../../shared/shared.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectorRef, ContentChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ModalDirective, ActiveDirective } from 'angular-bootstrap-md';
import { FormGroup, FormArray } from '@angular/forms';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { FormBuilderService } from '../services/form-builder.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],

})
export class CustomerRegistrationComponent implements OnInit, AfterViewInit {

  subscription: Subscription;

  customerRegistrationForm: FormGroup;

  @ViewChild('modalContainer') modalContainer: ModalDirective;

  @ViewChildren(ActiveDirective) mdbActiveList: QueryList<ActiveDirective>;

  @ViewChild(ModalDirective) mdbModal: ModalDirective;

  orders_FormArray_List: FormArray;

  ordersListCounter$: Subject<number> = new Subject();

  constructor(public viewContainerRef: ViewContainerRef, private formBuilderService: FormBuilderService,
    private ref: ChangeDetectorRef, private sharedService: SharedService) {

    this.customerRegistrationForm = this.formBuilderService.registrationFormBuilder();
    this.orders_FormArray_List = this.formBuilderService.getOrdersList(this.customerRegistrationForm);

  };

  ngOnInit() {
    this.customerRegistrationModalState$();
  };

  ngAfterViewInit(): void {
    this.ordersCounter$();
  };

  addOrder() {
    this.ordersListCounter$.next(this.orders_FormArray_List.length);
    this.orders_FormArray_List.push(this.formBuilderService.ordersFormGroupBuilder());
  };

  removeOrder(orderIndex: number) {
    this.ordersListCounter$.next(this.orders_FormArray_List.length);
    this.orders_FormArray_List.removeAt(orderIndex);
  };

  ordersCounter$() {
    this.subscription = this.ordersListCounter$.subscribe((counter) => {
      const ordersCountState = (this.orders_FormArray_List.length <= this.ordersListSize)
        ? this.orders_FormArray_List.enable() : this.orders_FormArray_List.disable();
    });
  };

  get ordersListSize() {
    return 3;
  };

  saveCustomer() {
    if (this.customerRegistrationForm.valid) {

      this.sharedService.customerCreator(this.customerRegistrationForm.value);
      this.reset_form_mdbActive();

    } else {
      debugger;
    };
  };

  reset_form_mdbActive() {

    this.customerRegistrationForm = this.formBuilderService.registrationFormBuilder();
    this.customerRegistrationForm.reset({});
    this.orders_FormArray_List = this.formBuilderService.getOrdersList(this.customerRegistrationForm);
    this.ref.detectChanges();
    this.mdbActiveList.map(el => el.onBlur());

  };

  customerRegistrationModalState$() {
    this.mdbModal.onHide.subscribe((state) => {
      this.sharedService.set_customersModalState$({ isOpen: false, modalName: CUSTOMER_REGISTRATION })
    });
    this.mdbModal.onShow.subscribe((state) => { });
  };

  public hideModal() {
    this.ref.detectChanges();
    this.mdbModal.hide();
  };

  public showModal() {
    this.ref.detectChanges();
    this.mdbModal.show();
  };




};
