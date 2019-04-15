import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

let service:string = 'http://localhost:8080/';

export interface LoginInterface{
  message:string;
  code:number;
}

const httpOptions = {
  headers: new HttpHeaders({
    //'Content-type': 'application/JSON',
    'username': 'sumit',
    'password': 'anjali'
  }) 
};

@Injectable()
export class LoginServiceService {

  
  
  constructor(private http:HttpClient) { 

    headers:({
      'username':'sumit',
      'password':'anjali'
    });
  }

  login(username,password){
    return this.http.get<LoginInterface>(service+//'login/all/user',{
      'myapp/login',{
      headers:{'username':username,
        'password':password}
    });
  } 

 /* login(){
    return this.http.get<string>(service+//'login/all/user',{
      'myapp/login', {
        responseType: 'json',
        headers: new HttpHeaders({
          'username':'sumit',
          'password':'anjali'
        })
      }
      
      //headers:{'username':'sumit',
        //'password':'anjali'}
    //};
    */
  
}
