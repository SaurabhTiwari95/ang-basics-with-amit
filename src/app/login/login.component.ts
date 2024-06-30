import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm! : FormGroup;
  loginData : any;
  signUpData : any = [];
  constructor(
    private router : Router,
  )
  { 
    this.loginForm = new FormGroup({
      email : new FormControl('testing@gmail.com',Validators.required),
      pwd : new FormControl('12345', [Validators.required,Validators.maxLength(5)])
    })
  }

  navigateToSignUp(){
    this.router.navigateByUrl('signUp');
  }

  onLogin(){
    this.loginData = this.loginForm.value
    localStorage.setItem('loginCreds',JSON.stringify(this.loginForm.value))
    this.signUpData = JSON.parse(localStorage.getItem('userData') as any)
    console.log(this.signUpData,typeof this.signUpData);
    this.signUpData.forEach((authObj : any)=>{
      if(authObj.pwd == this.loginData.pwd && authObj.email == this.loginData.email){
        this.router.navigateByUrl('home');
      }
    })
  }

}
