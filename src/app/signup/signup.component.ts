import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userData: any = [];
  signUpForm!: FormGroup
  constructor(
    private router: Router,
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl('', Validators.required),
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      pwd: new FormControl('', [Validators.required, Validators.maxLength(8)])
    })

  }
  navigateToLogin() {
    this.router.navigateByUrl('');
  }

  onSignUp() {
    const userData: any = localStorage.getItem('userData');
    if (userData != null) {
      this.userData = JSON.parse(userData)
    }
    this.userData.push(this.signUpForm.value);
    localStorage.setItem('userData', JSON.stringify(this.userData))
    this.signUpForm.reset();
  }
}
