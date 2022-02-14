import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';
import { Park, Convert } from '../Park';
import { ParkService } from '../Park.service';
import { UserService } from '../User.service';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.scss']
})
export class UserFavoritesComponent implements OnInit {
  @Input() Id: number;
  @Input() parkCode: string;
  park?: Park;
  user?: User;

  constructor(private userService: UserService, private parkService: ParkService) {

  }

  ngOnInit() {
    this.userService.GetUserList(this.Id).subscribe(
      (response: any) => {
        let json = Convert.parkToJson(response);
        this.park = Convert.toPark(json);
      }
    );
  }
  ExpandDetails(parkCode: string) {
    let userListPanel = document.getElementById("userlist" + parkCode);
    let detailPanel = document.getElementById("detail" + parkCode);
    let addButton = document.getElementById("addListButton" + parkCode);

    if (detailPanel.style.display === "none") {
      detailPanel.style.display = "inherit";
      addButton.setAttribute("hidden", "hidden");
    }
    else if (detailPanel.style.display === "" || detailPanel.style.display === "inherit") {
      detailPanel.style.display = "none";
      userListPanel.style.display = "inherit";
    }
  }
}
