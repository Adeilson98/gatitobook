import { AuthenticatorService } from './../../authenticator/authenticator.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';

  constructor(private authService:AuthenticatorService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.auth(this.user, this.password).subscribe(()=>{

      this.router.navigate(['animais'])

    },(error)=>{

      alert('não deu bom')
      console.log(error);

    })
  }

}
