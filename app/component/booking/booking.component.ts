import { Component, OnInit } from '@angular/core';
//import {MyordersModel} from 'src/app/myorders-model';
import { OrderService } from 'src/app/service/order.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

User:any[];
// 

constructor(private Parkings:OrderService) { }

Bookings=new FormGroup({
  ChooseVehicleType: new FormControl(''),
  ChooseParkingLevel:new FormControl(''),
  ParkingDate:new FormControl(''),
  ChooseParkingRow:new FormControl(''),
  ChooseParkingSlot:new FormControl(''),
  CustomerName:new FormControl(''),
  PhoneNo :new FormControl(''),
  VehicleNo:new FormControl('')
  });
  ngOnInit() {
    this.getS();
    
    this.User=this.Parkings.user;
  }
  getS(){
    this.Parkings.getProduct().subscribe(
      (data:[]) => {
        console.log(data);
        this.User=data;   //Assign the data into userdetailes
      });
    }  

    AddS()
    {
     // let s: any = {  SUPLNO: t1, SUPLNAME: t2, SUPLADDR:t3 };
      alert("Booking done");
     
      this.Parkings.AddProduct(this.Bookings.value).subscribe((result)=>{
        console.log(result);
        this.getS();
      },(err) =>{
          console.log(err);
      });
    }
 }
