import { TestBed, inject } from '@angular/core/testing';

import { CustomerBuilderService } from './customer-builder.service';

describe('CustomerBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerBuilderService]
    });
  });

  it('should be created', inject([CustomerBuilderService], (service: CustomerBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
