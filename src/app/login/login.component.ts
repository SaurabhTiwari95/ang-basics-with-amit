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
  constructor(
    private router : Router,
  )
  { 
    this.loginForm = new FormGroup({
      email : new FormControl('',Validators.required),
      pwd : new FormControl('', [Validators.required,Validators.maxLength(5)])
    })
  }

  navigateToSignUp(){
    this.router.navigateByUrl('signUp');
  }

  onLogin(){
    console.log(this.loginForm.value)
    localStorage.setItem('loginCreds',JSON.stringify(this.loginForm.value))
  }

}
