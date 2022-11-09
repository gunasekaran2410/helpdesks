import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  example:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  pagego() {
    if(this.example == "user"){
      this.router.navigate(["/user/Issue-entry"]);
    }
    else if (this.example == "admin"){
      this.router.navigate(["/admin/dashboard"]);
    }
  }

}
