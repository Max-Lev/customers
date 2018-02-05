import { SharedService } from './../shared/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavList, navList } from './nav-list';
import { IActiveModal, CUSTOMER_REGISTRATION } from '../models/modal.model';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NavbarComponent } from 'angular-bootstrap-md/navbars';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('mdbnavbar') mdbNavBar: NavbarComponent;

  navigationList: NavList[] = navList;

  constructor(private sharedService: SharedService) { }

  ngOnInit() { };

  ngAfterViewInit(): void {
    this.autoCloseNav$();
  };

  openCustomerRegistrationForm() {
    const activeComponent: IActiveModal = { isOpen: true, modalName: CUSTOMER_REGISTRATION };
    this.sharedService.set_ModalState$(activeComponent);
    if (this.mdbNavBar.shown) {
      this.mdbNavBar.hide();
    }
  };

  autoCloseNav$() {
    this.sharedService.autoCloseNav$().subscribe((navState) => {
      if (this.mdbNavBar.shown) {
        this.mdbNavBar.hide();
      }
    });
  };

}
