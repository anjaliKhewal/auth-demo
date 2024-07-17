import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name:string;
  address:string;
  phone:number;
  email:string;
  
  constructor() { }

  ngOnInit() {
  }

  save(){

  }

}
