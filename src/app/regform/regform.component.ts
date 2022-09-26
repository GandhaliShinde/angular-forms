import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})

export class RegformComponent implements OnInit {
   myform:FormGroup;
   msg:string;
   confirmed:string = "";

  constructor() { 
    this.myform=new FormGroup({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),
      movie:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required]),
      date:new FormControl("",[Validators.required]),
      time:new FormControl("",[Validators.required])
      

    });
  }

  ngOnInit(): void {
    
  }

  // reg():void{
  //   if(this.myform.valid) {
  //   alert('working...')
  //   this.msg='SUCCESSFULLY REGISTER';
    
  //   }else{
  //     this.msg='FAILED TO REGISTER';

  //   }
  // }





  reg():void{
    if(this.myform.value.movieName == "Choose..."){
      alert('Select Movie!');
      this.confirmed = "Something went wrong, Try again later."

    }
    else if(this.myform.value.name=="" || this.myform.value.mobile=="" || this.myform.value.email=="" || this.myform.value.date=="" || this.myform.value.time==""){
      alert('Enter all the details');
      this.confirmed = "Something went wrong, Check the details."

    }
    else{

      alert('You are booking:' + this.myform.value.movie + "\n" + " on date:" + this.myform.value.date);
     this.confirmed = "Your movie is booked successfully"




    }
  }

}
