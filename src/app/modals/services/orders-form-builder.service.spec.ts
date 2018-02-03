import { TestBed, inject } from '@angular/core/testing';

import { OrdersFormBuilderService } from './orders-form-builder.service';

describe('OrdersFormBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersFormBuilderService]
    });
  });

  it('should be created', inject([OrdersFormBuilderService], (service: OrdersFormBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
