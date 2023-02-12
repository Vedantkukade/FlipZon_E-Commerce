import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchedresult:undefined|product[]
  searchedquery:undefined | string|null;
  nosearch=false;
  constructor(private activeRoute:ActivatedRoute, private product:ProductService){
  }

  ngOnInit():void{
    let query=this.activeRoute.snapshot.paramMap.get('query');
    console.log(query);
    query && this.product.searchproducts(query).subscribe((result)=>{
      this.searchedresult=result
     
    })
  }
}
