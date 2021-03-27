import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { InfoCardComponent } from './common/info-card/info-card.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { OrderListComponent } from './page/order-list/order-list.component';
import { CustomerListComponent } from './page/customer-list/customer-list.component';
import { BillListComponent } from './page/bill-list/bill-list.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { EditOrderComponent } from './page/edit-order/edit-order.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    InfoCardComponent,
    ProductListComponent,
    OrderListComponent,
    CustomerListComponent,
    BillListComponent,
    EditProductComponent,
    EditOrderComponent,
    EditCustomerComponent,
    EditBillComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
