import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Injectable()
export class OrdersFormBuilderService {

  list = [{ product: 'max' }, { product: 'lev' }];

  constructor(private formBuilder: FormBuilder) { };


  buildForm(): FormGroup {

    const form = this.formBuilder.group({
      customerOrders: this.formBuilder.array([this.orders_FormGroupBuilder()])
    });
    return form;
  };


  orders_FormGroupBuilder(): FormGroup {
    return this.formBuilder.group({
      product: ['', [Validators.required]],
    });
  };

  get_CustomerOrdersList(customerRegistrationForm: FormGroup): FormArray {
    const ordersList = <FormArray>customerRegistrationForm.get('customerOrders');
    return ordersList;
  };





};

