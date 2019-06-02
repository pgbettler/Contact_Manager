import { Component, OnInit } from '@angular/core';
// added import
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // added constructor parameter
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

}
