import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  uri = 'http//localhost:4000'; //should this be 4000 or 4200?

  constructor(private http: HttpClient) { }
  //get all users
  getUsers() {
    return this.http.get(`${this.uri}/users`);
  }
  //get user when corresponding ID is given
  getUserById(id) {
    return this.http.get(`${this.uri}/users/${id}`)
  }
  //using the data model given by "Login.js" Could change to username, password and ID number
  addUser(firstName, lastName, username, password) {
    const user = 
    {
      username: username,
      password: password
    };
    // Return a new user to be posted in MongoDB
    return this.http.post(`${this.uri}/users/add`, user);
  }
  // update user AND delete user are not requirements for the project, 
  // but I added them just in case they are useful in the future
  updateUser(id, firstName, lastName, username, password) {
    const user = 
    {
      username: username,
      password: password
    };
    // update corresponding user in MongoDB given ID
    return this.http.post(`${this.uri}/users/update/${id}`, user);
  }

  //again not required for our project
  deleteUser(id) {
    return this.http.get(`${this.uri}/users/delete/${id}`);
  }
}
