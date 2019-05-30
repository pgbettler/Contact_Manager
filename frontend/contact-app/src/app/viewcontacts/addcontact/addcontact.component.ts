import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor() { }

  states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho',
  'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts',
  'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon',
  'Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah',
  'Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  //model = new Contact('first', 'last', '123455789', 'address', this.states[0]);

  ngOnInit() {
  }

}
