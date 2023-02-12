import { Component } from '@angular/core';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  addproductmessage:string|undefined;
  constructor(private product:ProductService){}

  resetform(addproduct:NgForm){
    setTimeout(() => {
      addproduct.resetForm()
    }, 1000);
    
  }

  addProduct(data:product){
    this.product.addproduct(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.addproductmessage="Product is successfully added !"
      }
      setTimeout(()=>{
        this.addproductmessage=undefined;
        
      },3000)
    })
  }

  
}
