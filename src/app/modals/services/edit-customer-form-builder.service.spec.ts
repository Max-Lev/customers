import { TestBed, inject } from '@angular/core/testing';

import { EditCustomerFormBuilderService } from './edit-customer-form-builder.service';

describe('EditCustomerFormBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCustomerFormBuilderService]
    });
  });

  it('should be created', inject([EditCustomerFormBuilderService], (service: EditCustomerFormBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
