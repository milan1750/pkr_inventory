import { Component, OnInit } from '@angular/core';
import { AccessUserService } from '../services/access-user.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  loader = true;
  errorMsg  = '123';
  note = 'Please wait while loading the data';
  users: User[] = [];
  constructor(private userService: AccessUserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      res => {
        this.users = res.data;
        this.loader = false;
      },
      err => {
        console.log(err);
      }
    );
  }
}
