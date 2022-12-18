import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserExistService {

  constructor(private newUserService: NewUserService) { }

  userAlreadyExist() {

    return (control:AbstractControl) => {

      return control.valueChanges.pipe(

        switchMap((userName) => this.newUserService.verifyUserExist(userName))

        ),
        map((userExist) => ( userExist ? {userExistent: true} : null )),
        first()

    }

  }

}
