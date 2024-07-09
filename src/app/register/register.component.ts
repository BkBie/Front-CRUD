import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public User:User[]|any;


  constructor(private registerService: RegisterService,private router : Router) { }

  ngOnInit(): void {
  }
  public onRegister(addForm: NgForm): void {
    this.registerService.addUser(addForm.value).subscribe(
      data => {      
        console.log("Login successfully");
        alert("Appy success!");
        addForm.reset();
      },
      error => {
        alert("Failed to apply!");
        addForm.reset();
      }
    );
  }

}
