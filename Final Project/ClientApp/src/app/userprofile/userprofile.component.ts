import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { Convert, User } from '../User';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [UserService]
})
export class UserprofileComponent implements OnInit {

  user?: User;
  users?: User[] = [];

  constructor(private userService: UserService) {
    this.userService.GetUsers().subscribe(
      (response: any) => { this.users = response }
      // console.log(response);
      // let json = Convert.userArrayToJson(response);
      // this.users = Convert.toUserArray(json);
      // }
    );
  }

  ngOnInit() {
  }

}
