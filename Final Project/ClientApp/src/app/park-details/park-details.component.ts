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
//delete the following once testing is complete (and un-comment the input above - 
//that will be passed in by other views when the list is generated):
parkCode1 = "zion";

user: User;
park: Park;
// singlePark?: Park["data"];
//loggedInUser: User;
singlePark?: Park["data"][0];

  constructor(private parkService: ParkService, private userService: UserService) { 

  }

  ngOnInit() {
    this.parkService.GetParkByParkCode(this.parkCode).subscribe(
      (response:any)=> {
        
        let json = Convert.parkToJson(response);
        this.park = Convert.toPark(json);
        
        this.singlePark = this.park.data[0];
        
      }
    );


  }
  AddParkToUserList(parkCode:string){
    this.userService.GetLoggedInUser(
      (loggedInUser) => {
        console.log(loggedInUser);
          
        this.userService.AddParkToUserList(parkCode, loggedInUser);
    
      }
    );

  }
  CollapseDetails(parkCode: string){
    let detailPanel = document.getElementById("detail"+parkCode);
    let searchPanel = document.getElementById("search"+parkCode);
    
    if (detailPanel.style.display === "" || detailPanel.style.display === "inherit")
    {
      detailPanel.style.display = "none";
      searchPanel.style.display = "inherit";
      console.log("hiding display");
    }
    else if (detailPanel.style.display === "none")
    {
      let searchParent = searchPanel.parentNode;
    let searchElement=document.createElement("p");
    searchElement.textContent=searchPanel.textContent;
    searchElement.id=searchPanel.id;
    searchParent.replaceChild(searchElement, searchPanel);
    }
  }

}
