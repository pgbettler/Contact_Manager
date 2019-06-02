import { Component, OnInit } from '@angular/core';
// added import 
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //added constructor parameter
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

}
