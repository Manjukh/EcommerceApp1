import { Component } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  displayedColumns: string[] = ['Name', 'Description','Price','Quantity','FinalPrice'];
  products: Product[] = [];

  allCarts: any[]= [];
  id: number=0;
 
  Quantity:number=1;
  FinalPrice:number=0;
  grandTotal:number= this. FinalPrice++;
  
  
 


  constructor(private productService: ProductService,private cartService:CartService,private router:Router) { }
       
  ngOnInit(): void {
    this.getAllCarts();
    
    
  }


  getAllCarts(){
    
    this.cartService.getAllCarts().subscribe(
      (response: any[])=>
      { console.log(response);
        this.allCarts= response;},
        (error:any)=>{console.log(error);});
  }
  emptyCart(){
    this.allCarts=[];
    
  }

  confirmOrder(){

    alert('Your order is confirmed');
  }

  increaseQuantity() {
    
   this.Quantity++;
  }

  
  decreaseQuantity() {
    if (this.Quantity > 0) {
      this.Quantity--;
    }
  }

}
