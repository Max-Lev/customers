import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateCustomerFormBuilderService {

  constructor(private formBuilder: FormBuilder) { };

  // registrationFormBuilder(customerEditMode: boolean): FormGroup {
  customer_RegistrationFormBuilder(): FormGroup {

    const customerRegistrationForm: FormGroup = this.formBuilder.group({
      customerName: ['', [
        Validators.required, Validators.minLength(2),
      ]],
      customerEmail: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')
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

}
