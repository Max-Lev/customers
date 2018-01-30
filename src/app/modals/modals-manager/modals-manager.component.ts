import { ModalDirective } from 'angular-bootstrap-md';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../../shared/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { CustomerRegistrationComponent } from './../customer-registration/customer-registration.component';
import { RegistrationModalDirective } from './../registration-modal.directive';
import {
  ViewChild, TemplateRef, ComponentRef, ContentChild,
  Component, OnInit, ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import { AfterViewInit, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IActiveModal } from '../../models/modal.model';

@Component({
  selector: 'app-modals-manager',
  templateUrl: './modals-manager.component.html',
  styleUrls: ['./modals-manager.component.scss']
})
export class ModalsManagerComponent implements OnInit, AfterViewInit, AfterContentInit {

  subscription: Subscription;

  @ViewChild(RegistrationModalDirective) _RegistrationModalDirective: RegistrationModalDirective;

  componentRef: ComponentRef<CustomerRegistrationComponent | any>;

  @ViewChild(ModalDirective) modal: ModalDirective;

  constructor(private sharedService: SharedService, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { };

  ngOnInit() {

  };

  ngAfterContentInit(): void { };

  ngAfterViewInit(): void {
    this.modalState$();
  };

  modalState$() {

    this.subscription = this.sharedService.customerModalState$.subscribe((state: IActiveModal) => {
      // debugger;
      if (state.isOpen) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomerRegistrationComponent);
        this.componentRef = this._RegistrationModalDirective.viewContainerRef.createComponent(componentFactory);
        // console.log(this.componentRef);
        setTimeout(() => {
          const _component = (<CustomerRegistrationComponent>this.componentRef.instance).openModal();
        }, 0);
      } else {
        this._RegistrationModalDirective.viewContainerRef.clear();
      }
      return state;
    });

  };
   


}
