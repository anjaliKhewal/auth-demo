import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { DefaultComponent } from './components/default/default.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { LoginServiceService } from '../services/login-service.service';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BankingComponent } from './components/banking/banking.component';

@NgModule({
  declarations: [UserLoginComponent, 
    DefaultComponent,
    DashboardComponent,
    BankingComponent
  ],
  imports: [
    CommonModule,
   // HttpClient,
   // HttpRequest,
   HttpClientModule,
   FormsModule,
  // Router,
   RouterModule
  ],
  providers:[
    LoginServiceService


  ]
})
export class AuthModule { }
