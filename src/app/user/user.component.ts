import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import key from '../key';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public adress = "http://85.160.64.233:3000/user";
  public email = "";
  public username = "";
  public id = "";

  constructor(private http: HttpClient) {

    const headers = new HttpHeaders().set('User-Token', key.access);
    
    this.http.get(this.adress, {headers}).subscribe(
      (data: any) => {
        this.id = data.id;
        this.email = data.email;
        this.username = data.username;

      }, (error) =>{
  
    }
    );
   }

  ngOnInit() {
  }

}