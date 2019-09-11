import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/router-module';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { BookingComponent } from './component/booking/booking.component';
import { MyordersComponent } from './component/myorders/myorders.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { ProvidingservicesComponent } from './component/providingservices/providingservices.component';
import{HttpClientModule} from '@angular/common/http';
import { ParkingService } from './service/parking.service';
import { OrderService } from './service/order.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    AboutComponent,
    BookingComponent,
    MyordersComponent,
    FeedbackComponent,
    ProvidingservicesComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule
 ],
  providers: [ParkingService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
