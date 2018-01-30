import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRegistrationComponent } from './orders-registration.component';

describe('OrdersRegistrationComponent', () => {
  let component: OrdersRegistrationComponent;
  let fixture: ComponentFixture<OrdersRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
