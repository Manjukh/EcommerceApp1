import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  



  constructor(private httpClient : HttpClient) { 
    this.header.append("accept", "text/json");
    this.header.append("Access-Control-Allow-Origin", "*");}

    
    header: HttpHeaders = new HttpHeaders();

   getAllCarts() : Observable<any>{
      return this.httpClient.get('http://127.0.0.1:9090/allCarts', { headers: this.header });
  }
}
