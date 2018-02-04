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
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')
      ]],
      customerPhone: ['', [Validators.required]]
    });
    return customerEditForm;
  };

}
