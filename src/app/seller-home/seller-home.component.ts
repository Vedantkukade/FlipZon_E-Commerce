import { Component } from '@angular/core';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productlist:undefined | product[]
  productmessage:undefined | string;
  delicon=faTrash;
  editicon=faEdit;
  constructor(private product:ProductService){}

  ngOnInit():void{
    this.list();
  }

  deleteproduct(id:number){
    console.log(id);
    this.product.deleteproduct(id).subscribe((result)=>{
      if(result){
        this.productmessage="Product is Deleted !"
        this.list()
      }
    })
    setTimeout(()=>{
      this.productmessage=undefined
    },3000)
  }

  list(){
    this.product.productlist().subscribe((result)=>{
      console.log(result);
      this.productlist=result;
    })
  }
}
