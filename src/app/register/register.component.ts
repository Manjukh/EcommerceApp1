import { Component,OnInit } from '@angular/core';
import { Register } from '../model/register';
import {FormControl, Validators} from '@angular/forms';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 username:string = "";
 name:string = "";
  email:string = "";
  password:string = "";
  constructor(private registerService : RegisterService) { }

  ngOnInit(): void {
      
  }

  register() : void {
    let register : Register = {
        username:this.username,
        name:this.name,
        email:this.email,
        password:this.password
    };
    this.registerService.submitRegistration(register).subscribe();
    console.log("Submitted Registration");
}
}
