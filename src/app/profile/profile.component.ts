import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:User[]|any;

  id:number|any;

  constructor(private userService: UserService,private router : Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = this.userService.getUserById(this.id).subscribe(data =>{
      this.user = data;
    }, error => console.log(error))
    
  }

  toEdit(){
   this.router.navigate(['editprofile',this.id]);
  }
  toMember(){
    this.router.navigate(['member']);
   }

}
