import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'Customers', loadChildren: './../customers/customers.module#CustomersModule',
    data: {
      preload: true
    }
  },
  {
    path: 'Orders', loadChildren: './../orders/orders.module#OrdersModule',
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'Customers'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
