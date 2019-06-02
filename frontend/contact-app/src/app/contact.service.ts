import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = 'http://localhost:4000'; //should this be 4000 or 4200?

  constructor(private http: HttpClient) { }

  // The service should contain service methods to retrieve contact data from the back-end:

  // A method for retrieving all availabe contacts
  getContacts() 
  {
    // By using the HttpClient instance available via http the complete list of contacts is retrieved
    return this.http.get(`${this.uri}/contacts`);
  }

  // A method for retrieving a single contact entry by ID
  getContactById(id) 
  {
    return this.http.get(`${this.uri}/contacts/${id}`);
  }

  // Adding Issues
  // This method is assuming we are using the data model created by Alex.
  addContact(firstName, lastName, phoneNumber, emailAddress)
  {
    const contact = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress
    };
    // Return a new contact and post it to MongoDB
    return this.http.post(`${this.uri}/contacts/add`, contact);
  }

  // Updating Issues
  // To update a existing contact by POST request, and make sure to
  // pass the updated contact object as following.
  updateContact(id, firstName, lastName, phoneNumber, emailAddress)
  {
    const contact = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress
    };
    // Update this contact to MongoDB
    return this.http.post(`${this.uri}/contacts/update/${id}`, contact)
  }

  // Deleting Contact
  deleteContact(id)
  {
    return this.http.get(`${this.uri}/contacts/delete/${id}`);
  }
}
