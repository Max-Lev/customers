import { SharedService } from './../shared/shared.service';
import { Orders_Cloth, Orders_Electronics } from './../models/orders_category';
import { Component, OnInit } from '@angular/core';
import { Orders_Category } from '../models/orders_category';
import { Customer_Mock } from '../models/data/customers-list.mock';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, AfterViewInit, OnDestroy {

  subscription: Subscription;
  _Category = new Map();
  _Customer_Mock: any = Customer_Mock;

  constructor(private sharedService: SharedService) { };

  ngOnInit() {

  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

  ngAfterViewInit(): void {
    // this.subscription = this.sharedService.customerCreateState$.subscribe((state) => {
    //   console.log('customer$')
    //   return state;
    // });
  };


}
