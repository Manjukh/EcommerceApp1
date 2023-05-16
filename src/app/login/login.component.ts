import { Component,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username:string="";
  password:string="";
  message:string="";
  



  constructor( private loginService:LoginService,private router : Router){}

  ngOnInit(): void {
      
  }

  login():void{
    let login:Login ={
      username :this.username,
      password: this.password
    };

    this.loginService.loginAccount(login).subscribe((response: any) => {
      console.log(response);
      this.message = response.message;
      alert("Login Successful.Start Shopping");
      this.router.navigate(['/', 'product']);
      
      
    },
    (error) => {
      console.log(error);
      this.message = error.message;
      alert("Login Failed");
    }
  );
    


  }

}
