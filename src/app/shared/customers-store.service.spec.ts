import { TestBed, inject } from '@angular/core/testing';

import { CustomersStoreService } from './customers-store.service';

describe('CustomersStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersStoreService]
    });
  });

  it('should be created', inject([CustomersStoreService], (service: CustomersStoreService) => {
    expect(service).toBeTruthy();
  }));
});
