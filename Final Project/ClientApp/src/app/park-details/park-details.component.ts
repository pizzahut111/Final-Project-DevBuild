import { Component, OnInit, Input } from '@angular/core';
import { Convert, Park } from '../Park';
import { ParkService } from '../Park.service';
import { User } from '../User';
import { UserService } from '../User.service';

@Component({
  selector: 'app-park-details',
  templateUrl: './park-details.component.html',
  styleUrls: ['./park-details.component.css'],
  providers: [ParkService, UserService]
})
export class ParkDetailsComponent implements OnInit {
  @Input() parkCode: string;

  user: User;
  park: Park;
  userParkList: Park;
  loggedInUser: User;
  singlePark?: Park["data"][0];

  constructor(private parkService: ParkService, private userService: UserService) {
  }

  ngOnInit() {
    this.parkService.GetParkByParkCode(this.parkCode).subscribe(
      (response: any) => {
        let json = Convert.parkToJson(response);
        this.park = Convert.toPark(json);
        this.singlePark = this.park.data[0];
      }
    );

    this.userService.GetLoggedInUser(
      (loggedInUser) => {
        this.loggedInUser = loggedInUser;
        let addButton = document.getElementById("addListButton");
        if (this.loggedInUser.id === 0) {
          addButton.style.visibility = "hidden";
        }
        else {
          addButton.style.visibility = "visible";
        }
      }
    );
  }

  AddParkToUserList(parkCode: string) {
    this.userService.GetLoggedInUser(
      (loggedInUser) => {
        this.userService.AddParkToUserList(parkCode, loggedInUser);
      }
    );
  }
}