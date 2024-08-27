import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';

import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [DynamicFormComponent, CommonModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  LoginForm: string = "login";
  RegisterForm: string = "register";

}
