import { Component, OnInit } from '@angular/core';
import { User } from '../user';


import { Users } from '../userslist';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
   
  
  users = Users;

  selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
