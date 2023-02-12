import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sellerupdateproduct',
  templateUrl: './sellerupdateproduct.component.html',
  styleUrls: ['./sellerupdateproduct.component.css']
})
export class SellerupdateproductComponent {
  productdata:undefined|product;
  productmessage:undefined|string;

  constructor(private route:ActivatedRoute, private product:ProductService, private router:Router){}

  ngOnInit():void{
    let productid=this.route.snapshot.paramMap.get('id');
    console.log(productid);
   productid && this.product.getproduct(productid).subscribe((data)=>{
      console.log(data);
      this.productdata=data;
    })
  }

  updateProduct(data:product){
    console.log(data);
    if(this.productdata){
      data.id=this.productdata.id
    }
    this.product.updateproduct(data).subscribe((result:product)=>{
      if(result){
        this.productmessage="Product is Updated"
      }
    })
    setTimeout(() => {
      this.productmessage=undefined;
      this.router.navigate(['seller-home'])
    }, 3000);
  }
}
