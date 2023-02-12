import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  productdata:undefined | product
  productquantity:number=1
  constructor(private activeRoute:ActivatedRoute, private product:ProductService){}

  ngOnInit():void{
    let productid=this.activeRoute.snapshot.paramMap.get('id');
    productid && this.product.getproduct(productid).subscribe((result)=>{
      this.productdata=result;
    })
  }

  handlequantity(val:string){
    if(this.productquantity<20 && val==='plus'){
      this.productquantity+=1;
    }else if(this.productquantity>1 && val==='min'){
      this.productquantity-=1;
    }
  }

  Addtocart(){
    if(this.productdata){
      this.productdata.quantity=this.productquantity
      console.log(this.productdata)
      this.product.localaddtocart(this.productdata)
    }
  }
}
