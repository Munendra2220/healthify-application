import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public validUsername = 'admin';
  public validPassword = 'admin@1234';
  public userInput: any;
  public passwordInput: any;
  public remeberMe: boolean = false;

  constructor(public route: Router) {

  }

  ngOnInit() {

  }

  login() {

    if (this.userInput == this.validUsername && this.passwordInput == this.validPassword && this.remeberMe) {
      confirm("Login successful!");
      localStorage.setItem("loggedIn", "true");
      this.route.navigate(['home']);
      console.log('Login successful!');
    } else if (!this.remeberMe) {
      alert('Please check remark');
    }
    else {
      alert('Invalid username or password!');
    }
  }

  checkRemeber(ev:any) {
    console.log('ev', ev);
    this.remeberMe = ev;
  }
}
