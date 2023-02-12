import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showlogin=false;

  Submit(data:any){
    console.log(data);
  }

  openlogin(){
    this.showlogin=true
  }

  opensignup(){
    this.showlogin=false
  }
}
