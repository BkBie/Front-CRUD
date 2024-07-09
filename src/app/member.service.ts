import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Member } from './member';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiServerUrl = environment.apiBaseUrl;

 

  constructor(private http: HttpClient) { }

  public getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(`${this.apiServerUrl}/member/all`)
  }

  public getMembersById(id:number): Observable<Member>{
    return this.http.get<Member>(`${this.apiServerUrl}/member/${id}`);
  }

  public addMembers(member : Member): Observable<Member>{
    return this.http.post<Member>(`${this.apiServerUrl}/member/add`,member);
  }

  public updateMembers(id : number, member: Member): Observable<Member>{
    return this.http.put<Member>(`${this.apiServerUrl}/member/update/${id}`,member);
  }

  public deleteMembers(memberId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/member/delete/${memberId}`);
  }

  public updateProfile(user : User): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/account/updateProfile`,user);//////////////////////////////////////
  }

}
