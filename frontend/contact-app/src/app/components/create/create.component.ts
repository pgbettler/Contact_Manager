import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ContactService } from '../../contact.service';
// a
import { UserService } from '../../user.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  constructor(private contactService: ContactService, private router: Router, private UserService: UserService) { }

  ngOnInit() {
  }

}
