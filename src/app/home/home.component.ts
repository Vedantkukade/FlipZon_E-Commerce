import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  PopularProducts: undefined | product []
  trends:undefined | product []

  constructor(private product:ProductService){}
  
  ngOnInit():void{
    this.product.popularproducts().subscribe((data)=>{
      console.log(data);
      this.PopularProducts=data
    })

    this.product.trendingproducts().subscribe((result)=>{
      this.trends=result;
    })
  }
}
