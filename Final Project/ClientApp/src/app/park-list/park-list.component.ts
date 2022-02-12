import { Component, Input, OnInit } from '@angular/core';
import { deepEqual } from 'assert';
import { Convert, Park } from '../Park';
import { ParkService } from '../Park.service';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css'],
  providers: [ParkService]
})
export class ParkListComponent implements OnInit {
@Input() parkCode: string;

park?: Park;
parks?: Park[] = [];

  constructor(private parkService: ParkService) {
     this.parkService.GetParks().subscribe(
       (response:any)=> {console.log(response);
         let json = Convert.parkToJson(response);
         this.park = Convert.toPark(json);
         console.log(this.park);
       }
     );
   }

  ngOnInit() {
  }
  ExpandDetails(parkCode: string){
    
    let detailPanel = document.getElementById("detail"+parkCode);
    let listPanel = document.getElementById("list"+parkCode);
    let loginButton = document.getElementById("loginButton");
    let addButton = document.getElementById("addListButton"+parkCode);

    if (detailPanel.style.display === "none")
    {
      detailPanel.style.display = "inherit";
      if (loginButton !== null){
        addButton.setAttribute("hidden", "hidden");
      }
    }
    else if (detailPanel.style.display === "" || detailPanel.style.display === "inherit")
    {
      detailPanel.style.display = "none";
      listPanel.style.display = "inherit";
    }
  }
}
