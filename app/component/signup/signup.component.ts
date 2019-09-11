import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Model } from 'src/app/model';
import { ParkingService } from 'src/app/service/parking.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  products:Model[];//Model Class
  
  Registration=new FormGroup({            //Reactive Form Approch
    id:new FormControl(''),
    Username:new FormControl('',Validators.required),
    Email:new FormControl(''),
    Password:new FormControl(''),
    ConfirmPassword:new FormControl(''),
    
  });
  constructor(private Parking:ParkingService) { }

  ngOnInit() {
    this.getS();
    
    this.products=this.Parking.user;
  }
  getS(){
    this.Parking.getProduct().subscribe(
      (data:[]) => {
        console.log(data);
        this.products=data;   //Assign the data into userdetailes
      });
    }  

    AddS()
    {
     // let s: any = {  SUPLNO: t1, SUPLNAME: t2, SUPLADDR:t3 };
      alert("Registration done");
     
      this.Parking.AddProduct(this.Registration.value).subscribe((result)=>{
        console.log(result);
        this.getS();
      },(err) =>{
          console.log(err);
      });
    }
 }

