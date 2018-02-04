import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable()
export class EditCustomerFormBuilderService {

  constructor(private formBuilder: FormBuilder) { };

  customer_EditFormBuilder(): FormGroup {
    const customerEditForm = this.formBuilder.group({
      customerName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      customerEmail: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.(com|il|net|info|biz)')
      ]],
      customerPhone: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('[0-9]{9,10}$'),
        // Validators.pattern('[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
      ]]
    });
    return customerEditForm;
  };

}
