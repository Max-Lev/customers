import { TestBed, inject } from '@angular/core/testing';

import { CreateCustomerFormBuilderService } from './form-builder.service';

describe('FormBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCustomerFormBuilderService]
    });
  });

  it('should be created', inject([CreateCustomerFormBuilderService], (service: CreateCustomerFormBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
