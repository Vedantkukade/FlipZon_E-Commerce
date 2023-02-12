import { Component } from '@angular/core';
import { SellerserviceService } from '../services/sellerservice.service';
import { Router } from '@angular/router';
import { signup } from '../datatype';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller: SellerserviceService, private router: Router) { }
  showlogin = false;
  autherror:string='';
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  Submit(data: signup): void {
    console.log(data);
    this.seller.usersignup(data)
  }

  login(data: signup): void {
    // console.log(data);
    this.autherror="";
    this.seller.userlogin(data);
    this.seller.isloginerror.subscribe((iserror)=>{
      if(iserror){
        this.autherror="Email or Password is not correct"
      }
    })
  }

  openlogin() {
    this.showlogin = true;
  }

  opensignup() {
    this.showlogin = false;

  }
}
