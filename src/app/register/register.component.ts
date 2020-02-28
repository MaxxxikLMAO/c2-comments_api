import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    private adress = "http://85.160.64.233:3000/session/register";
    private username= "";
    private email = "";
    private password = "";
    private passwordctrl = "";

  constructor (private http: HttpClient, private router: Router){

  }
  clickedButton() {
    if(this.password === this.passwordctrl) {
    this.http.post(this.adress, {email: this.email, password: this.password, username: this.username, passwordConfirmation: this.passwordctrl }).subscribe(
      (data: any) => {
        this.router.navigate(["/login"])
        }, (error) =>{

        }
      );
    }
  }

  ngOnInit() {
  }
}