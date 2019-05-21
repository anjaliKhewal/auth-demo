import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule, Router } from '@angular/router';
import { AppRoutes } from './app.routes';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
   // Router

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
