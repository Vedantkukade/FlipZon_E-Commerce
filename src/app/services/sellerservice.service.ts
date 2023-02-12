import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class SellerserviceService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isloginerror=new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }

  usersignup(data: signup) {
    this.http.post("http://localhost:3000/seller", data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home'])

    })

  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])

    }
  }

  userlogin(data: login) {
    console.log(data)
    // api call code will be there
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result: any) => {
        console.log(result);
        if(result && result.body && result.body.length){
          console.log("user loged in");
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
        }else{
          console.log("login failed")
          this.isloginerror.emit(true);
        }

      })

  }
}
