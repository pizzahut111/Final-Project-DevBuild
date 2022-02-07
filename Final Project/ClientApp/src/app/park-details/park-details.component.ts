import { Component, OnInit, Input } from '@angular/core';
import { Convert, Park } from '../Park';
import { ParkService } from '../Park.service';

@Component({
  selector: 'app-park-details',
  templateUrl: './park-details.component.html',
  styleUrls: ['./park-details.component.css'],
  providers: [ParkService]
})
export class ParkDetailsComponent implements OnInit {
//@Input() parkCode: string;
//delete the following once testing is complete (and un-comment the input above - 
//that will be passed in by other views when the list is generated):
parkCode = "azru";

park: Park;
// singlePark?: Park["data"];

singlePark?: Park["data"][0];

  constructor(private parkService: ParkService) { 
    this.parkService.GetParkByParkCode(this.parkCode).subscribe(
      (response:any)=> {
        //console.log(response);
        let json = Convert.parkToJson(response);
        this.park = Convert.toPark(json);
        this.singlePark = this.park.data[0];
        //console.log(this.singlePark);
      }
    );

  }

  ngOnInit() {
  }

}
