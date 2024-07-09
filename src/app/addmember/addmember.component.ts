import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  constructor(private memberService: MemberService,private router: Router) { }

  ngOnInit(): void {
  }


  public onAddMember(addForm: NgForm): void {
    document.getElementById('add-member-form')?.click();
    this.memberService.addMembers(addForm.value).subscribe(
      (response: Member) => {
        alert("Add succeed!");
        console.log(response);
        addForm.reset();
        this.goToMember();
      },
      (error: HttpErrorResponse) => {
        alert("Add Failed!");
        addForm.reset();
      }
    );
  }
  goToMember(){
    this.router.navigate(['/member']);
  }

}
