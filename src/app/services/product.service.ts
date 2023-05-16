import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 product: Product = {
    
    productId: 0,
    productName: "",
    
    productDescription: "",
    productPrice: 0  
};
  
  constructor(private httpClient:HttpClient) {this.header.append("accept", "text/json");
  this.header.append("Access-Control-Allow-Origin", "*"); }
  header: HttpHeaders = new HttpHeaders();



  getAllProducts():Observable<any>{
    return this.httpClient.get(`http://127.0.0.1:9090/getAllProducts`, { headers: this.header });
  }
  addToCart(productId:number){

    return this.httpClient.post('http://127.0.0.1:9090/addToCart/'+ productId, { headers: this.header });
  }
}
