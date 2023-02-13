import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      EmailAddress: [''],
      Password: ['']
    })
  }
  login() {
    this.http.get<any>("https://localhost:44340/api/users")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.EmailAddress === this.loginForm.value.EmailAddress && a.Password === this.loginForm.value.Password
        });
        if (user) {
          alert("Login successfull")
          this.loginForm.reset();
          this.router.navigate(['dashboard'])

        } else {
          alert("invalid credentails")
        }
      }, err => {
        alert("something went wrong")
      })
  }
}