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
  @Input() Id:number;
  @Input() parkCode: string;
  park?: Park;
  user?:User;

  constructor(private userService: UserService, private parkService: ParkService) { 
    // console.log(this.user.id);
    // this.userService.GetUserList(this.id).subscribe(
    //   (response:any)=> {
    //     console.log(this.id);
    //     let json = Convert.parkToJson(response);
    //     this.park = Convert.toPark(json);
    //   }
    // );
  }

  ngOnInit() {
    // this.userService.GetLoggedInUser(
    //   (user) => {
    //     //console.log(loggedInUser);
    //     this.user = user;
        
    // }
    // );
    console.log(this.Id);
   this.userService.GetUserList(this.Id).subscribe(
    (response: any)=> {
      let json = Convert.parkToJson(response);
      this.park = Convert.toPark(json);
    }
   );
   }
   ExpandDetails(parkCode: string){
    //let searchPanel = document.getElementById("search"+parkCode);
    let detailPanel = document.getElementById("detail"+parkCode);

    if (detailPanel.style.display === "none")
    {
      detailPanel.style.display = "inherit";
      //searchPanel.style.display = "none";
      //console.log("does this display details?");
    }
    else if (detailPanel.style.display === "" || detailPanel.style.display === "inherit")
    {
      detailPanel.style.display = "none";
      //searchPanel.style.display = "inherit";
      console.log("hiding display");
    }
  }
}
