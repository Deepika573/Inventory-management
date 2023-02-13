import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { ReorderComponent } from './reorder/reorder.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'reorder', component: ReorderComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
