import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { DefaultComponent } from './components/default/default.component';

import { HttpRequest, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [UserLoginComponent, DefaultComponent],
  imports: [
    CommonModule,
   // HttpClient,
   // HttpRequest,
  ],
  providers:[


  ]
})
export class AuthModule { }
