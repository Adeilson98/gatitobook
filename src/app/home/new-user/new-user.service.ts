import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  insertNewUser(newUser: NewUser) {

    return this.http.post('http://localhost:300/user/signup', newUser);

  }

  verifyUserExist(userName: string) {

    return this.http.get(`http://localhost:300/user/exists/${userName}`);

  }
}
