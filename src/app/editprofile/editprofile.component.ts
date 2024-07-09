import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user:User|any;
  id:number|any;

  constructor(private userService: UserService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = this.userService.getUserById(this.id).subscribe(data =>{
      this.user = data;
    }, error => console.log(error))
  }

  onSubmit(){
    this.userService.updateMembers(this.id,this.user).subscribe( 
      data => {
      this.goToMember();
    }
    , error => console.log(error));
  }

  goToMember(){
    this.router.navigate(['/profile',this.id]);
  }

}
