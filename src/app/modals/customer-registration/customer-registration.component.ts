import { SharedService } from './../../shared/shared.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ViewChild } from '@angular/core';
import { Query } from '@angular/compiler/src/core';
import { ContentChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit, AfterViewInit {

  subscription: Subscription;

  @ViewChild(ModalDirective) modal: ModalDirective;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.modal);
    this.subscription = this.sharedService.customerCreateState$.subscribe((state) => {
      if (state) {
        this.modal.show();
      }
      return state;
    });
  }

}
