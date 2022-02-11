import { Component, OnInit  } from '@angular/core';
import { UserService } from '../User.service';
import { User } from '../User';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [UserService]
})
export class NavMenuComponent implements OnInit {

  loggedInUser?: User;
  isExpanded = false;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.GetLoggedInUser(
      (loggedInUser) => {
        this.loggedInUser = loggedInUser;   
      }
    );
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  LogOutUser(user: User) {
    this.userService.LogOutUser(user);
  }
}
