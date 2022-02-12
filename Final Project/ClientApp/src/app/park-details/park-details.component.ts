import { Component, OnInit, Input } from '@angular/core';
import { getAllJSDocTagsOfKind } from 'typescript';

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
userParkList: Park;
loggedInUser: User;
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
    //not sure how to get an accurate loggedInUser here
    this.userService.GetLoggedInUser(
      (loggedInUser) => {
        this.loggedInUser = loggedInUser;    
        let addButton = document.getElementById("addListButton");
        if (this.loggedInUser.id===0)
        {
          addButton.style.visibility="hidden";
        }
        else
        {
          addButton.style.visibility="visible";
          //if accessed from user favorites, then hide 
          
        }

      }
    );


  }
    // this.userService.GetUserList(this.loggedInUser.id).subscribe(
    //   (response: any) => {
    //     let addButton = document.getElementById("addListButton");
    //     this.userParkList = response;
    //     this.userParkList.data.forEach(element => {
    //       addButton.style.visibility="hidden";
    //   }
    //   }
    // );
      
        // let addButton = document.getElementById("addListButton"); 
        // let removeButton = document.getElementById("removeListButton");

    //     if (this.loggedInUser.id===0)
    //     {
    //       addButton.style.visibility="hidden";
    //       removeButton.style.visibility="hidden";
    //     }
    //     //when user is logged in:
    //     else if (this.loggedInUser.id>0)
    //     {
    //       this.userService.GetUserList(this.loggedInUser.id).subscribe(
    //         (response: any)=> {
    //           let json = Convert.parkToJson(response);
    //           this.userParkList = Convert.toPark(json);

    //             this.userParkList.data.forEach(element => {
    //               addButton.style.visibility="hidden";
    //               removeButton.style.visibility="visible";
    //             });
    //         }
    //        );
           
    //     }
    //   }
    // );
      

  
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
    let userListPanel = document.getElementById("userlist"+parkCode);
    let listPanel = document.getElementById("list"+parkCode);
    
    // if (detailPanel.style.display === "" || detailPanel.style.display === "inherit")
    // {
    //   detailPanel.style.display = "none";
    //   userListPanel.style.display = "inherit";
    //   console.log(searchPanel);
    //   searchPanel.style.display = "inherit";
    //   listPanel.style.display = "inherit";
    //   console.log("***hiding display");
    // }
  }

}
