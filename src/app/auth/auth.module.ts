import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { DefaultComponent } from './components/default/default.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { LoginServiceService } from '../services/login-service.service';

@NgModule({
  declarations: [UserLoginComponent, DefaultComponent],
  imports: [
    CommonModule,
   // HttpClient,
   // HttpRequest,
   HttpClientModule,
   FormsModule
  ],
  providers:[
    LoginServiceService


  ]
})
export class AuthModule { }
