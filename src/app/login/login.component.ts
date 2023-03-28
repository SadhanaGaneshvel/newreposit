import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'Models/Admin';
import { AuthService } from '../auth.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //Required properties.
  username:string="";
  password:string="";
  invalid:string="";
  loading = false;
    users: Admin[] = [];
  
  //Injecting the auth service inside this component.
 constructor(private loginservice:LoginserviceService,private router:Router) { }

  ngOnInit(): void {
    this.loading = true;
        this.loginservice.getAllUsers().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
  }

  login(formdata:any):void
  {
    

  }
}