import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor( private httpClient:HttpClient ) { }

  auth( user: string, password: string ):Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
    userName: user,
    password: password
  })
  }
}
