import { IActiveModal } from './../../models/modal.model';
import { RegistrationModalDirective } from './../registration-modal.directive';
import { CustomerRegistrationComponent } from './../customer-registration/customer-registration.component';
import { SharedService } from './../../shared/shared.service';
//import { OrdersRegistrationComponent } from './../orders-registration/orders-registration.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ModalDirective } from 'angular-bootstrap-md';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, ViewChild, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import 'rxjs/add/observable/from';
@Component({
  selector: 'app-registration-modal-container',
  templateUrl: './registration-modal-container.component.html',
  styleUrls: ['./registration-modal-container.component.scss']
})
export class RegistrationModalContainerComponent implements OnInit, AfterViewInit {

  @ViewChild('modalContainer') modalContainer: ModalDirective;
  @ViewChild(RegistrationModalDirective) _RegistrationModalDirective: RegistrationModalDirective;
  componentRef: ComponentRef<CustomerRegistrationComponent>;
  modal_OpenState: boolean = false;

  subscription: Subscription;

  constructor(private sharedService: SharedService, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { };

  ngOnInit() {
    setTimeout(() => {
      console.log('componentRef: ', this.componentRef)
      // console.log(this.modalsManagerComponent)
    }, 1000);
  };

  ngAfterViewInit(): void {
    this.modalContainer.show();

    console.log(this.modalContainer)
    this.modal_CloseState$();
    this.modal_OpenState$();
  };

  modal_CloseState$() {
    this.subscription = Observable.from(this.modalContainer.onHide).subscribe((state) => {
      this.modal_OpenState = false;
      return state;
    });
  };

  modal_OpenState$() {
    this.subscription = Observable.from(this.modalContainer.onShow).subscribe((state) => {
      this.modal_OpenState = true;
      return state;
    });
  };



}
