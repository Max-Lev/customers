import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { NavList, navList } from './nav-list';
import { ViewChild } from '@angular/core';
import { IActiveModal, CUSTOMER_REGISTRATION } from '../models/modal.model';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  navigationList: NavList[] = navList;

  constructor(private sharedService: SharedService) { }

  ngOnInit() { };

  ngAfterViewInit(): void {
    // this.sharedService.customerModalState$.subscribe((state) => {
    //   console.log(state);
    // });

    //this.openCustomerRegistrationForm();

  };

  openCustomerRegistrationForm() {
    const activeComponent: IActiveModal = {
      isOpen: true,
      modalName: CUSTOMER_REGISTRATION
    };
    this.sharedService.set_ModalState$(activeComponent);
  };

}
