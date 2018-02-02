import { ActiveModule } from 'angular-bootstrap-md';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: OrdersComponent,
    children: [
      {
        path: ':id', component: OrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ActiveModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [OrdersComponent],
  exports: [OrdersComponent]
})
export class OrdersModule { }
