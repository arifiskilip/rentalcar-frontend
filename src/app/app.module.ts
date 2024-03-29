import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsSearchPipe } from './pipes/cars-search.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { VatCalculatePipe } from './pipes/vat-calculate.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsFilterComponent } from './components/cars-filter/cars-filter.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminBrandComponent } from './components/admin/admin-brand/admin-brand.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AdminColorComponent } from './components/admin/admin-color/admin-color.component';
import { AdminCarComponent } from './components/admin/admin-car/admin-car.component';
import { AdminCarImagesComponent } from './components/admin/admin-car-images/admin-car-images.component';
import { AccountLayoutComponent } from './components/account/account-layout/account-layout.component';
import { AccountLoginComponent } from './components/account/account-login/account-login.component';
import { AccountRegisterComponent } from './components/account/account-register/account-register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AccountEditComponent } from './components/account/account-edit/account-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsSearchPipe,
    VatAddedPipe,
    VatCalculatePipe,
    CarDetailComponent,
    CarsComponent,
    CarsFilterComponent,
    LeftbarComponent,
    NavbarComponent,
    PaymentComponent,
    PaymentDetailComponent,
    RentCarComponent,
    AdminBrandComponent,
    AdminColorComponent,
    AdminCarComponent,
    AdminCarImagesComponent,
    AccountLayoutComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    AccountEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
