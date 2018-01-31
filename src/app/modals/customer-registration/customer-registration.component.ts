import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../../shared/shared.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectorRef, ContentChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Query } from '@angular/compiler/src/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { CUSTOMER_REGISTRATION } from '../../models/modal.model';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],

})
export class CustomerRegistrationComponent implements OnInit, AfterViewInit {

  subscription: Subscription;

  customerRegistrationForm: FormGroup;

  @ViewChild('modalContainer') modalContainer: ModalDirective;

  @ViewChild(ModalDirective) mdbModal: ModalDirective;

  ordersList: FormArray;

  ordersListCounter$: Subject<number> = new Subject();

  constructor(public viewContainerRef: ViewContainerRef,
    private ref: ChangeDetectorRef, private sharedService: SharedService,
    private formBuilder: FormBuilder) {
    this.registrationFormBuilder();
  };

  ngOnInit() {
    this.customerRegistrationModalState$();
  };

  ngAfterViewInit(): void {
    console.log(this.customerRegistrationForm);
    this.ordersCounter$();
  };

  registrationFormBuilder() {
    this.customerRegistrationForm = this.formBuilder.group({
      customerName: ['max', [
        Validators.required, Validators.minLength(2)
      ]],
      customerEmail: ['max@gmail.com', [
        Validators.required
      ]],
      customerPhone: ['0545969609', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      orders: this.formBuilder.array([this.ordersFormGroupBuilder()])
    });
    this.getOrdersList();
  };

  getOrdersList() {
    this.ordersList = <FormArray>this.customerRegistrationForm.get('orders');
  };

  ordersFormGroupBuilder(): FormGroup {
    return this.formBuilder.group({
      product: ['', [Validators.required]]
    });
  };

  addOrder() {
    this.ordersListCounter$.next(this.ordersList.length);
    this.ordersList.push(this.ordersFormGroupBuilder());
  };

  removeOrder(orderIndex: number) {
    this.ordersListCounter$.next(this.ordersList.length);
    this.ordersList.removeAt(orderIndex);
  };

  ordersCounter$() {
    this.subscription = this.ordersListCounter$.subscribe((counter) => {
      const ordersCountState = (this.ordersList.length <= this.ordersListSize) ? this.ordersList.enable() : this.ordersList.disable();
    });
  };

  get ordersListSize() {
    return 3;
  };

  saveCustomer() {
    if (this.customerRegistrationForm.valid) {
      debugger;
    } else {
      debugger;
    }
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
