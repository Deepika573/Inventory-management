import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ShowDelSupComponent } from './supplier/show-del-sup/show-del-sup.component';
import { AddEditSupComponent } from './supplier/add-edit-sup/add-edit-sup.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowDelCusComponent } from './customer/show-del-cus/show-del-cus.component';
import { AddEditCusComponent } from './customer/add-edit-cus/add-edit-cus.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShowDelInvComponent } from './inventory/show-del-inv/show-del-inv.component';
import { AddEditInvComponent } from './inventory/add-edit-inv/add-edit-inv.component';
import { OrdersComponent } from './orders/orders.component';
import { ShowDelOrdComponent } from './orders/show-del-ord/show-del-ord.component';
import { AddOrdComponent } from './orders/add-ord/add-ord.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReorderComponent } from './reorder/reorder.component';
import { AddReComponent } from './reorder/add-re/add-re.component';
import { ShowDelReComponent } from './reorder/show-del-re/show-del-re.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierComponent,
    ShowDelSupComponent,
    CustomerComponent,
    ShowDelCusComponent,
    InventoryComponent,
    AddEditCusComponent,
    AddEditSupComponent,
    ShowDelInvComponent,
    AddEditInvComponent,
    OrdersComponent,
    ShowDelOrdComponent,
    AddOrdComponent,
    ReorderComponent,
    AddReComponent,
    ShowDelReComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
