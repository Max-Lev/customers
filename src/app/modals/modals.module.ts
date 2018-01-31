import { CustomerBuilderService } from './services/customer-builder.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { ModalsManagerComponent } from './modals-manager/modals-manager.component';
import { RegistrationModalDirective } from './registration-modal.directive';
import { OrdersRegistrationComponent } from './orders-registration/orders-registration.component';
import { ModalModule, ActiveModule } from 'angular-bootstrap-md';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationModalContainerComponent } from './registration-modal-container/registration-modal-container.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ActiveModule,
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CustomerRegistrationComponent,
    ModalsManagerComponent,
    RegistrationModalDirective,
    OrdersRegistrationComponent,
    RegistrationModalContainerComponent,
  ],
  providers: [
    CustomerBuilderService
  ],
  entryComponents: [CustomerRegistrationComponent, OrdersRegistrationComponent],
  exports: [ModalsManagerComponent, RegistrationModalContainerComponent]
})
export class ModalsModule { }
