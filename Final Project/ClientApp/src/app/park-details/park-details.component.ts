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

park: Park;
// singlePark?: Park["data"];
user: User;
singlePark?: Park["data"][0];

  constructor(private parkService: ParkService, private userService: UserService) { 

  }

  ngOnInit() {
    this.parkService.GetParkByParkCode(this.parkCode).subscribe(
      (response:any)=> {
        //console.log(response);
        let json = Convert.parkToJson(response);
        this.park = Convert.toPark(json);
        //console.log(this.parkCode);
        this.singlePark = this.park.data[0];
        //console.log(this.singlePark);
      }
    );


  }
  AddParkToUserList(parkCode:string){
    let loggedInUser:User = this.userService.GetLoggedInUser();
    console.log(loggedInUser.password);
    if(loggedInUser!=null)
    {

    this.userService.AddParkToUserList(parkCode, loggedInUser);
    }
  }

}
