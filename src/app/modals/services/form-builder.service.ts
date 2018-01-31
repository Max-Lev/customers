import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder) { };

  registrationFormBuilder(): FormGroup {

    const customerRegistrationForm = this.formBuilder.group({
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
      customerOrders: this.formBuilder.array([this.ordersFormGroupBuilder()])
    });

    return customerRegistrationForm;
  };

  ordersFormGroupBuilder(): FormGroup {
    return this.formBuilder.group({
      product: ['PS4', [Validators.required]],
    });
  };

  getOrdersList(customerRegistrationForm: FormGroup): FormArray {
    const ordersList = <FormArray>customerRegistrationForm.get('customerOrders');
    return ordersList;
  };





}
