import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 username=''
 password=''
 errorMessage='Error not valid credentials'
 invalidLogin= false

 handleClick() {
  if(this.username==='Deltaforce' && this.password === 'worstfellow') {
    this.router.navigate(['introduction'])
    this.invalidLogin = false;

} else {
this.invalidLogin =true;
}

 }

}
