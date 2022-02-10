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
      (response: any) => { this.users = response;
      //can we look through the list of users and see if any of them show isLoggedIn = true?
      //if no one is logged in, set validLogin to false.
      //if someone is logged in, set validLogin to true, add that user to this.user.


      }
      // console.log(response);
      // let json = Convert.userArrayToJson(response);
      // this.users = Convert.toUserArray(json);
      // }
    );

  }

  ngOnInit() {
    this.userService.GetLoggedInUser(
      (loggedInUser) => {
        //console.log(loggedInUser);
        this.loggedInUser = loggedInUser;
        //console.log(this.loggedInUser.email);
      }
    );
  }

ValidateUser():boolean{
let username:string = (<HTMLInputElement> document.getElementById("username")).value;
let password:string = (<HTMLInputElement> document.getElementById("password")).value;

this.validLogin= this.userService.ValidateUser(username, password);
return this.validLogin;

}

  LogOutUser(user: User){
    this.userService.LogOutUser(user);
    //.subscribe(
    //   (response: any) => { this.user = response;
    //   let json = Convert.userToJson(response);
    //   this.user = Convert.toUser(json);
    //   console.log(response);
    //   console.log(this.user.isLoggedIn);
    //   }
    // );

  }
}
