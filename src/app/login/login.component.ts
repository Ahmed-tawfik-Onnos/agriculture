import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3,}$/)]),
  });

  
  get emailInvalid(){
    return this.loginForm.controls['email'].invalid&&this.loginForm.controls['email'].touched;
  }
  get passwordInvalid(){
    return this.loginForm.controls['password'].invalid&&this.loginForm.controls['password'].touched;
  }
  get FormInvalid(){
    return this.loginForm.invalid;
  }

  constructor(private _auth:AuthService,private router:Router) { }

  login(){
    if(this.loginForm.invalid){
      this.loginForm.reset;
      return
    }
    this._auth.loginApi(this.loginForm.value).subscribe((data)=>{
      localStorage.setItem("token",data.token);
      if(data.message=="success"){
        this.loginForm.reset;
        this.router.navigateByUrl("/home");
      }else{
        this.loginForm.reset();
        alert(data.message);
      }
      (err:any)=>{
        alert(err);
      }
    })
  }
  
  ngOnInit(): void {
  }

}
