import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { User } from '../User';



@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [UserService]
})
export class UserprofileComponent implements OnInit {

  loggedInUser?: User;
  users?: User[] = [];
  validLogin: boolean;

  constructor(private userService: UserService) {
    this.userService.GetUsers().subscribe(
      (response: any) => {
        this.users = response;
      }
    );

  }

  ngOnInit() {
    this.userService.GetLoggedInUser(
      (loggedInUser) => {
        this.loggedInUser = loggedInUser;
      }
    );
  }

  ValidateUser(): boolean {
    let username: string = (<HTMLInputElement>document.getElementById("username")).value;
    let password: string = (<HTMLInputElement>document.getElementById("password")).value;

    this.validLogin = this.userService.ValidateUser(username, password);
    return this.validLogin;

  }

  LogOutUser(user: User) {
    this.userService.LogOutUser(user);
  }
}
