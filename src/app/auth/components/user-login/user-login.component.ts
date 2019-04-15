import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest,HttpEvent,HttpEventType } from '@angular/common/http';
import { LoginServiceService, LoginInterface } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username:string;
  password:string;
  successMessage:string;
  errorMessage: string;
  url: string ='http://127.0.0.1:8080/login/all/user';
  userObservable : Observable<[]>;
  loginRes:LoginInterface;
  res:string;

  constructor(private loginService:LoginServiceService) { }

  ngOnInit() {
    
   // this.httpClient.get(this.url).subscribe(data => {
     // console.log(data);
    //});

    }

    search(username,password){
      this.loginService.login(username,password).subscribe(loginRes =>{
        this.loginRes = loginRes
        console.log(loginRes);
      });
    } 

    /*search(username,password){
      this.loginService.login().subscribe(loginRes =>{
        this.res = loginRes.toString();
        console.log(this.res);
      });
    }*/
    
  }


