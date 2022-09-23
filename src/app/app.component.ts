import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
email:string='';
pwd:string='';

sendData(data:any):void{
    alert('working..'+data)
    console.log(data)
  }
}
