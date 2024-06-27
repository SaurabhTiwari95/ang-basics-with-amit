import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'signUp', component: SignupComponent, pathMatch: 'full'
    }
];
