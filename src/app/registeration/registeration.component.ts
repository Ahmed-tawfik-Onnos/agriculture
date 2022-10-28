import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  registerForm:FormGroup=new FormGroup({
    'first_name' :new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    'last_name':new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3,}$/)]),
  });

  

  
  get firstNameInvalid(){
    return this.registerForm.controls['first_name'].invalid&&this.registerForm.controls['first_name'].touched;
  }
  get lastNameInvalid(){
    return this.registerForm.controls['last_name'].invalid&&this.registerForm.controls['last_name'].touched;
  }
  get emailInvalid(){
    return this.registerForm.controls['email'].invalid&&this.registerForm.controls['email'].touched;
  }
  get passwordInvalid(){
    return this.registerForm.controls['password'].invalid&&this.registerForm.controls['password'].touched;
  }
  get FormInvalid(){
    return this.registerForm.invalid;
  }

  constructor(private _auth:AuthService,private router:Router) { }

  register(){
    if(this.registerForm.invalid){
      this.registerForm.reset;
      return
    }
    this._auth.registerApi(this.registerForm.value).subscribe((data)=>{
      console.log(data)
      if(data.message=="success"){
        this.registerForm.reset;
        this.router.navigateByUrl("/login");
        alert("Successfully Registered, Please Login to see Our trends!")
      }else{
        this.registerForm.reset();
        alert(data.message)
      }
    }),(err:any)=>{
      alert(err)
    }
  }
  

  ngOnInit(): void {
  }

}
