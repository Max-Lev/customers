import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsManagerComponent } from './modals-manager.component';

describe('ModalComponent', () => {
  let component: ModalsManagerComponent;
  let fixture: ComponentFixture<ModalsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
