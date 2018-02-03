import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder) { };

  // registrationFormBuilder(customerEditMode: boolean): FormGroup {
  customer_RegistrationFormBuilder(): FormGroup {

    const customerRegistrationForm: FormGroup = this.formBuilder.group({
      customerName: ['', [
        Validators.required, Validators.minLength(2)
      ]],
      customerEmail: ['', [
        Validators.required
      ]],
      customerPhone: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      customerOrders: this.formBuilder.array([this.orders_FormGroupBuilder()])
    });

    console.log('customerRegistrationForm: ', customerRegistrationForm)
    return customerRegistrationForm;
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









  // set_OrdersMode(customerRegistrationForm: FormGroup, customerEditMode: boolean) {
  //   if (!customerEditMode) {
  //     customerRegistrationForm.get('customerName').disable();
  //     customerRegistrationForm.get('customerName').clearValidators();
  //     customerRegistrationForm.get('customerEmail').disable();
  //     customerRegistrationForm.get('customerEmail').clearValidators();
  //     customerRegistrationForm.get('customerPhone').disable();
  //     customerRegistrationForm.get('customerPhone').clearValidators();
  //   }
  // };




}
