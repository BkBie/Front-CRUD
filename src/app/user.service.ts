import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public login(user : User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/account/login`,user);
  }

  public getUserById(id:number): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/account/profile/${id}`);
  }

  public updateMembers(id : number, member: User): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/account/update/${id}`,member);
  }
}
