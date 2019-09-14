import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { User } from '../models/user.model';
import { AccessUserService } from '../services/access-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loader = {
    status: true,
    message: 'Please wait while fetching the user data',
  };

  user: User;
  userid: string = null;
  constructor(private route: ActivatedRoute, private userService: AccessUserService) {
    this.route.params.subscribe( params => this.userid = params.id);
  }

  ngOnInit() {
    this.userService.getOne(this.userid).subscribe(
      res => {
        this.loader.status = false;
        this.user = res.data;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
