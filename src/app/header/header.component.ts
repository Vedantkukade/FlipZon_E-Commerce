import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menutype:String='default'
  sellername:string="";
  searchResult:undefined | product[]
  constructor(private router:Router, private product:ProductService){}

  ngOnInit():void{
    
    this.router.events.subscribe((val:any)=>{
     if(val.url){
      if(localStorage.getItem('seller') && val.url.includes('seller')){
        console.log("In seller area")
        this.menutype="seller";
        if(localStorage.getItem('seller')){
          let sellerstore=localStorage.getItem('seller');
          let sellerdata=sellerstore && JSON.parse(sellerstore)[0];
          this.sellername=sellerdata.name;
          
        }
      }else{
        console.log("Outside seller area")
        this.menutype="default"
      }
     }
    })
  }

  logout(){
    localStorage.removeItem("seller");
    this.router.navigate(['']);
  }

  SearchProducts(query:KeyboardEvent){
    if(query){
      const element=query.target as HTMLInputElement;
      this.product.searchproducts(element.value).subscribe((result)=>{
        console.log(result)
        if(result.length>5){
          result.length=5
        }
        
        this.searchResult=result
      })
    }

  }

  hidesearch(){
    this.searchResult=undefined
  }
  redirecttodetails(id:number){
    this.router.navigate(['/productdetails/'+id]);
  }

  submitsearch(val:string){
    this.router.navigate([`search/${val}`])
  }
}
