import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  customerOrdersForm: FormGroup;

  ordersList: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildOrdersForm();
  };

  buildOrdersForm() {
    this.customerOrdersForm = this.formBuilder.group({
      name: ['max'],
      lastName: ['lev'],
      address: this.formBuilder.group({
        city: ['NY'],
        location: ['US']
      }),
      orders: this.formBuilder.array([this.ordersGroupListBuilder()])
    });
    this.ordersList = <FormArray>this.customerOrdersForm.get('orders');
  };

  ordersGroupListBuilder(): FormGroup {
    return this.formBuilder.group({
      product1: 'shoes',
      product2: 'hats'
    });
  };


  addOrder() {
    this.ordersList.push(this.ordersGroupListBuilder());
    console.log('ordersList: ', this.ordersList)
  };


}
