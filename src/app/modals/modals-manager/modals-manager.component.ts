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

import { IActiveModal, CUSTOMER_REGISTRATION } from '../../models/modal.model';

@Component({
  selector: 'app-modals-manager',
  templateUrl: './modals-manager.component.html',
  styleUrls: ['./modals-manager.component.scss']
})
export class ModalsManagerComponent implements OnInit, AfterViewInit, AfterContentInit {

  subscription: Subscription;

  @ViewChild(RegistrationModalDirective) registrationModalDirective: RegistrationModalDirective;

  customerRegistrationCompInstance: ComponentRef<CustomerRegistrationComponent>;

  constructor(private sharedService: SharedService, private viewContainerRef: ViewContainerRef,
    private ref: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver) { };

  ngOnInit() { };

  ngAfterContentInit(): void { };

  ngAfterViewInit(): void {
    this.customerRegistrationModal$();
  };

  registrationModalLoader() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomerRegistrationComponent);
    this.customerRegistrationCompInstance = this.registrationModalDirective.viewContainerRef.createComponent(componentFactory);
    this.customerRegistrationCompInstance.instance.showModal();
    this.ref.detectChanges();
  };

  customerRegistrationModal$() {
    this.subscription = this.sharedService.customerModalState$.subscribe((state: IActiveModal) => {

      if (state.modalName === CUSTOMER_REGISTRATION) {
        if (state.isOpen) {
          this.registrationModalLoader();
        } else {
          setTimeout(() => {
            this.registrationModalDirective.viewContainerRef.clear();
          }, 500);
        }
      }

    });
  };





};