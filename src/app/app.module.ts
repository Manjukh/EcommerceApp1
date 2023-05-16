import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductpageComponent } from './productpage/productpage.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  ;
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    CartComponent,
    ProductpageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule ,
    FormsModule,
    
    ReactiveFormsModule,
    MatTableModule
    
    
    
    
  ],
  providers: [CartService],
  exports: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
