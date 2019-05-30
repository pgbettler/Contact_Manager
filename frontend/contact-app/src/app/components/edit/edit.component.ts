import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

}
