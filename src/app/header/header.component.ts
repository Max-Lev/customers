import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { NavList, navList } from './nav-list';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigationList: NavList[] = navList;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {

  }

  createCustomer() {
    this.sharedService.createCustomer(true);
    // this.sharedService.createCustomer({
    //   name: 'Registration Modal',
    //   isOpen: true
    // });
  };

}
