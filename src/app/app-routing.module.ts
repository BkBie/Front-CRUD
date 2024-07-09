import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmemberComponent } from './addmember/addmember.component';
import { ContentComponent } from './content/content.component';
import { EditmemberComponent } from './editmember/editmember.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo: "/member"},
  {path:"login",component: LoginComponent},
  {path:"member",component: ContentComponent},
  {path:"register",component: RegisterComponent},
  {path:"profile/:id",component: ProfileComponent},
  {path:"editmember/:id",component: EditmemberComponent},
  {path:"editprofile/:id",component: EditprofileComponent},
  {path:"addmember",component: AddmemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
