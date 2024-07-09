import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './member.service';
import { ProfileComponent } from './profile/profile.component';
import { EditmemberComponent } from './editmember/editmember.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddmemberComponent } from './addmember/addmember.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditmemberComponent,
    EditprofileComponent,
    AddmemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
