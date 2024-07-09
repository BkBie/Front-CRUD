import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public members: Member[] | any;
  public editMember: Member | any;
  public deleteMember: Member | any;

 


  public getEdit():Member{
    return this.editMember;
  }

  constructor(private memberService: MemberService,private router: Router) { }

  ngOnInit(){
    this.getMembers();
  }

  public getMembers(): void {
    this.memberService.getMembers().subscribe(
      (response: Member[]) => {
        this.members = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  
  public onUpdateMember(id:number): void {
    this.router.navigate(['editmember',id]);
  }

  public onDeleteMember(memberId: number): void {
    this.memberService.deleteMembers(memberId).subscribe(
      (response: void) => {
        console.log(response);
        this.getMembers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
