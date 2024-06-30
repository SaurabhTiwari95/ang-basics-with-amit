import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'signUp', component: SignupComponent, pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent,
    }
];
