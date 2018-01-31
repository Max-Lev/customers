import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-orders-registration',
  templateUrl: './orders-registration.component.html',
  styleUrls: ['./orders-registration.component.scss']
})
export class OrdersRegistrationComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef, ) { }

  ngOnInit() {
    debugger;
  }

}
