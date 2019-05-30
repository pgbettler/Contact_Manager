import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  model = new User('name', 'username', 'password');

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }


  get diagnostic() { return JSON.stringify(this.model); }

}
