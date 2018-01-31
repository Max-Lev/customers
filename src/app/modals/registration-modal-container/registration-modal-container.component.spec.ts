import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationModalContainerComponent } from './registration-modal-container.component';

describe('RegistrationModalContainerComponent', () => {
  let component: RegistrationModalContainerComponent;
  let fixture: ComponentFixture<RegistrationModalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationModalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
