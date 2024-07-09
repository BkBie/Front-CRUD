

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';



@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.css']
})
export class EditmemberComponent implements OnInit {

  editMember:Member|any;
  id:number|any;
  
  constructor(private memberService: MemberService,private router: Router,private route:ActivatedRoute) { }

  
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.editMember = this.memberService.getMembersById(this.id).subscribe(data =>{
      this.editMember = data;
    }, error => console.log(error))
  }

  onSubmit(){
    this.memberService.updateMembers(this.id,this.editMember).subscribe( 
      data => {
      this.goToMember();
    }
    , error => console.log(error));
  }

  goToMember(){
    this.router.navigate(['/member']);
  }

 

}
