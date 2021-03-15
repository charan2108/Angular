import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username='';
  password='';
  invalidLogin = false
  

  constructor(private router :Router) { }

  ngOnInit() {
  }

  login() {
    if(this.username === 'Deltaforce' && this.password ==='123456') {
      this.router.navigate(['welcome']);
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
    
}
