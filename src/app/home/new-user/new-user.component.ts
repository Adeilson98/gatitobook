import { UserExistService } from './user-exist.service';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { tinyValidator } from './tiny.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private NewUserService: NewUserService, private userExistentService: UserExistService) { }

  ngOnInit(): void {

    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [tinyValidator], [this.userExistentService.userAlreadyExist()]],
      password: ['']
    });

  }

  create() {

    const newUser = this.newUserForm.getRawValue() as NewUser;

    console.log(newUser)

  }

}
