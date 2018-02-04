import { OrdersRegistrationComponent } from './../orders-registration/orders-registration.component';
import { ModalDirective } from 'angular-bootstrap-md';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../../shared/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { CustomerRegistrationComponent } from './../customer-registration/customer-registration.component';
import { RegistrationModalDirective } from './../registration-modal.directive';
import {
  ViewChild, TemplateRef, ComponentRef, ContentChild,
  Component, OnInit, ViewContainerRef, ComponentFactoryResolver,
  AfterViewInit, AfterContentInit, ChangeDetectorRef
} from '@angular/core';
import {
  IActiveModal, CUSTOMER_REGISTRATION, ORDERS_REGISTRATION,
  ORDERS_MODE, CUSTOMER_MODE, CUSTOMER_EDIT_MODE
} from '../../models/modal.model';

@Component({
  selector: 'app-modals-manager',
  templateUrl: './modals-manager.component.html',
  styleUrls: ['./modals-manager.component.scss']
})
export class ModalsManagerComponent implements OnInit, AfterViewInit, AfterContentInit {

  subscription: Subscription;

  @ViewChild(RegistrationModalDirective) registrationModalDirective: RegistrationModalDirective;

  customerRegistrationCompInstance: ComponentRef<CustomerRegistrationComponent>;
  ordersRegistrationCompInstance: ComponentRef<OrdersRegistrationComponent>;

  constructor(private sharedService: SharedService, private viewContainerRef: ViewContainerRef,
    private ref: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver) { };

  ngOnInit() { };

  ngAfterContentInit(): void { };

  ngAfterViewInit(): void {
    this.activeModal$();
  };

  // registrationModalLoader(customerEditMode: boolean) {
  registrationModalLoader(state: IActiveModal) {

    let componentFactory: any;
    if (state.modalName === CUSTOMER_REGISTRATION) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomerRegistrationComponent);
      this.customerRegistrationCompInstance = this.registrationModalDirective.viewContainerRef.createComponent(componentFactory);
      this.customerRegistrationCompInstance.instance.showModal();
      this.customerRegistrationCompInstance.instance.customerEditMode = false;
    }
    if (state.modalName === CUSTOMER_EDIT_MODE) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomerRegistrationComponent);
      this.customerRegistrationCompInstance = this.registrationModalDirective.viewContainerRef.createComponent(componentFactory);
      this.customerRegistrationCompInstance.instance.showModal();
      this.customerRegistrationCompInstance.instance.customerEditMode = true;
    }
    if (state.modalName === ORDERS_REGISTRATION) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(OrdersRegistrationComponent);
      this.ordersRegistrationCompInstance = this.registrationModalDirective.viewContainerRef.createComponent(componentFactory);
      this.ordersRegistrationCompInstance.instance.showModal();
    }
    this.ref.detectChanges();
  };

  activeModal$() {
    this.subscription = this.sharedService.customerModalState$.subscribe((state: IActiveModal) => {

      if (state.modalName === CUSTOMER_REGISTRATION) {
        if (state.isOpen) {
          // this.registrationModalLoader(true);
          this.registrationModalLoader(state);
        } else {
          setTimeout(() => {
            this.registrationModalDirective.viewContainerRef.clear();
          }, 500);
        }
      };

      if (state.modalName === ORDERS_REGISTRATION) {
        if (state.isOpen) {
          this.registrationModalLoader(state);
        } else {
          setTimeout(() => {
            this.registrationModalDirective.viewContainerRef.clear();
          }, 500);
        }
      };

      if (state.modalName === CUSTOMER_EDIT_MODE) {
        if (state.isOpen) {
          this.registrationModalLoader(state);
        } else {
          setTimeout(() => {
            this.registrationModalDirective.viewContainerRef.clear();
          }, 500);
        }
      };

    });
  };





};