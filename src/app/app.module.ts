import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, NavbarModule, BsDropdownModule, ModalModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutesModule } from './routes/routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CustomerRegistrationComponent } from './modals/customer-registration/customer-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarModule,
    ModalModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
