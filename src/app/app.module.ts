import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, NavbarModule, BsDropdownModule, ModalModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutesModule } from './routes/routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ModalsModule } from './modals/modals.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarModule,
    SharedModule.forRoot(),
    ModalsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
