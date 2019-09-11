import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { Model } from 'src/app/model';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  products:any[];
  
  Feedback=new FormGroup({            //Reactive Form Approch
    Name:new FormControl(''),
    Email:new FormControl('',Validators.required),
    Parkingdate:new FormControl('')
   
  });
  constructor(private Parking:FeedbackService) { }

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
      alert("Your Response is saved");
     
      this.Parking.AddProduct(this.Feedback.value).subscribe((result)=>{
        console.log(result);
        this.getS();
      },(err) =>{
          console.log(err);
      });
    }
 }



  