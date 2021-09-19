import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repository'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private useUrl: string = '';

  constructor(private http: HttpClient) {
    this.useUrl = `${environment.apiUrl}/users/${environment.username}`
   }

  getUser(): Observable<User>{
    return this.http.get<User>(this.useUrl)
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.useUrl + '/repos')
  }
}
