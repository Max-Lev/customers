import { Component, OnInit } from '@angular/core';
import { NavList, navList } from './nav-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigationList: NavList[] = navList;
  constructor() { }

  ngOnInit() {
  }

}
