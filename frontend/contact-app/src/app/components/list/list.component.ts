import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatTableDataSource } from '@angular/material';

import { Contact } from '../../contact.model';
import { ContactService } from '../../contact.service';
import { EditcontactComponent } from 'src/app/viewcontacts/contactdetails/editcontact/editcontact.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contacts: Contact[];
  displayedColumns = ['firstName', 'lastName', 'phoneNumber', 'emailAddress'];

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() 
  {
    this.fetchContacts();
  }

  // This method is used to retrieve the complete list of contacts to display. 
  fetchContacts()
  {
    this.contactService
    .getContacts()
    .subscribe((data: Contact[]) => {
      this.contacts = data;
      console.log('Data requested ...');
      console.log(this.contacts);
    });
  }

  // This method is used as the event handler method for the click event of 
  // the edit link which is included in the output.
  editContact(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  // The deleteContact event handler method is connected to the click event of the delete link.
  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.fetchContacts();
    });
  }

}
