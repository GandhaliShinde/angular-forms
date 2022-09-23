import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})

export class RegformComponent implements OnInit {
   myform:FormGroup;
   msg:string;

  constructor() { 
    this.myform=new FormGroup({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    });
  }

  ngOnInit(): void {
    
  }

  reg():void{
    if(this.myform.valid) {
    alert('working...')
    this.msg='SUCCESSFULLY REGISTER';
    this.myform.
    }else{
      this.msg='FAILED TO REGISTER';

    }
  }

}
