import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addproduct(data:product){
    return this.http.post("http://localhost:3000/products",data);
  }

  productlist(){
    return this.http.get<product[]>("http://localhost:3000/products")
  }

  deleteproduct(id:number){
   return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getproduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  updateproduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)
  }

  popularproducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=5')
  }

  trendingproducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=12')
  }

  searchproducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)
  }

  localaddtocart(data:product){
    let cartdata=[];
    let localcart=localStorage.getItem('localcart');
    if(!localcart){
      localStorage.setItem('localcart',JSON.stringify([data]));
    }else{
      cartdata=JSON.parse(localcart);
      cartdata.push(data);
      localStorage.setItem('localcart',JSON.stringify([cartdata]));
    }
  }
}
