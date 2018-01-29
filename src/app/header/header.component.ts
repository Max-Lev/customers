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

  // @ViewChild('basicModal') basicModel: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    //console.log(this.basicModel);
  }

  createCustomer() {
    this.sharedService.createCustomer(true);
  };

}
