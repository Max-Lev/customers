import { SharedService } from './../../shared/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { CustomerRegistrationComponent } from './../customer-registration/customer-registration.component';
import { RegistrationModalDirective } from './../registration-modal.directive';
import {
  ViewChild, TemplateRef, ComponentRef, ContentChild,
  Component, OnInit, ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import { AfterViewInit, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, AfterContentInit {

  subscription: Subscription;

  @ViewChild(RegistrationModalDirective) _RegistrationModalDirective: RegistrationModalDirective;

  componentRef: ComponentRef<any>;

  constructor(private sharedService: SharedService, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { };

  ngOnInit() { };

  ngAfterContentInit(): void { };

  ngAfterViewInit(): void {
    this.modalState$();
  };

  modalState$() {

    this.subscription = this.sharedService.customerCreateState$.subscribe((state) => {
      if (state) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomerRegistrationComponent);
        this.componentRef = this._RegistrationModalDirective.viewContainerRef.createComponent(componentFactory);
        console.log(this.componentRef);
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
