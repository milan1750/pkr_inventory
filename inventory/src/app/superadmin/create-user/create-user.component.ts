import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { CreateUserService } from '../services/create-user.service';
import { AuthService} from '../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userTemplate: User;
  userSet = false;
  errorMsg = 'nknk';
  user = {
    companyName: '',
    companyType: '',
    companyLocation: '',
    companyContact: '',
    companyWebsite: '',
    companyEmail: '',
    companyRegNumber: '',
    companyPanNumber: '',
    companyFocalPersonName: '',
    companyFocalPersonLocation: '',
    companyFocalPersonEmail: '',
    companyFocalPersoncontact: '',
    companyEstd: '',
  };
  constructor(private userService: CreateUserService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(userForm: NgForm) {
    this.userSet = true;
    if (userForm.invalid){
      return false;
    }
    this.userTemplate = userForm.value;
    this.userService.registerUser(this.userTemplate).subscribe(
      res => {
        userForm.reset();
        this.router.navigate(['/user-list']);
      },
      err => {
        this.errorMsg = 'Make sure your internet connection is enabled, Server is not responding at the moment';
      }
    );
  }

}
