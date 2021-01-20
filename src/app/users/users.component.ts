import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../user-data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList : user[] = [];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers() {
    this.userDataService.getUsers().subscribe(
      (data: user[]) => 
      {
        this.userList = data;
      }
    );
    
  }

}
