import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:User|any;
  public id:number|any;

  constructor(private userService: UserService,private router : Router) { }

  ngOnInit(): void {
  }

  public onLogin(loginForm: NgForm): void {
    this.userService.login(loginForm.value).subscribe(
      data => {      
        console.log("Login successfully");
        this.router.navigate(['profile',data.id]);
        loginForm.reset();
      },
      error => {
        alert("Username or Password is invalid.");
        loginForm.reset();
      }
    );
  }

}
