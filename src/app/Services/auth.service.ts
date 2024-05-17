import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('URL_DEL_ENDPOINT', { username, password }).pipe(
      map((response: any) => {
        this.loggedIn = true;
        return response;
      })
    );
  }
}
