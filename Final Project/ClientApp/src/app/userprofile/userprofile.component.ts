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

  user?: User;
  users?: User[] = [];
  validLogin: boolean;

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

ValidateUser():boolean{
let username:string = (<HTMLInputElement> document.getElementById("username")).value;
let password:string = (<HTMLInputElement> document.getElementById("password")).value;

this.validLogin= this.userService.ValidateUser(username, password);
return this.validLogin;

}

  // LogOutUser(userId: number){

  //   this.userService.UpdateUser(userId).subscribe(
  //     (response: any) => { this.user = response;
  //     let json = Convert.userToJson(response);
  //     this.user = Convert.toUser(json);
  //     console.log(response);
  //     console.log(this.user.isLoggedIn);
  //     }
  //   );
  //   this.user.isLoggedIn=false;
  //   this.userService.UpdateUser(userId, this.user)
  // }
}
