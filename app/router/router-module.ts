import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { LoginComponent } from '../component/login/login.component';
import { SignupComponent } from '../component/signup/signup.component';
import { AboutComponent } from '../component/about/about.component';
import { ContactComponent } from '../component/contact/contact.component';
import { BookingComponent } from '../component/booking/booking.component';
import { ProvidingservicesComponent } from '../component/providingservices/providingservices.component';
import { MyordersComponent } from '../component/myorders/myorders.component';
import { FeedbackComponent } from '../component/feedback/feedback.component';
const appRoutes:Routes=[
    {path:'Home',component:HomeComponent},
    {path:'Login',component:LoginComponent},
    {path:'Signup',component:SignupComponent},
    {path:'About',component:AboutComponent},
    {path:'Contact',component:ContactComponent},
    {path:'booking',component:BookingComponent},
    {path:'myorders',component:MyordersComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'pservice',component:ProvidingservicesComponent},
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'**',component:HomeComponent},
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[ RouterModule]

})
export class AppRoutingModule{ }