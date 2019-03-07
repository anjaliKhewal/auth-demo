import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest,HttpEvent,HttpEventType } from '@angular/common/http';

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

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    
    this.httpClient.get(this.url).subscribe(data => {
      console.log(data);
    });

    }
    
  }


