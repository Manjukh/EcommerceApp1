import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  message: string = "";
 products: Product[] = [];
productName: string = "";

 

  constructor(private productService:ProductService,private cartService:CartService){}
  ngOnInit(): void {
      this.productService.getAllProducts().subscribe(json => this.products = json);
  }

  getAllProducts(){
    return this.productService.getAllProducts().subscribe(json=>this.products= json);
  }
  addToCart(productId:number){

    this.productService.addToCart(productId).subscribe((response:any)=>
    {console.log(response);
     this.message=response.message;
    },
    (error)=>
    
    
    {
      this.message = "Error";
    });
  }


 
}
