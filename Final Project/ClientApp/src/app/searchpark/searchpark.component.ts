import { Component, OnInit } from '@angular/core';
import { Convert, Datum, Park } from '../Park';
import { ParkService } from '../Park.service';
@Component({
  selector: 'app-searchpark',
  templateUrl: './searchpark.component.html',
  styleUrls: ['./searchpark.component.css'],
  providers: [ParkService]
})
export class SearchparkComponent implements OnInit {
  park?: Park;
  searchedpark?: Datum[] = [];
  constructor(private parkService: ParkService) {
    this.parkService.GetParks().subscribe(
      (response: any) => {

        let json = Convert.parkToJson(response);
        this.park = Convert.toPark(json);

      }
    );
  }

  ngOnInit() {
  }
  SearchPark() {
    this.searchedpark.length = 0;
    let parkSearch: string = (<HTMLInputElement>document.getElementById("parkSearch")).value;
    for (let i = 0; i <= this.park.data.length; i++) {
      if (this.park.data[i].fullName.toLowerCase().includes(parkSearch.toLowerCase())) {
        this.searchedpark.push(this.park.data[i]);
      }
    }

  }
  ExpandDetails(parkCode: string) {

    let detailPanel = document.getElementById("detail" + parkCode);
    let searchPanel = document.getElementById("search" + parkCode);
    let loginButton = document.getElementById("loginButton");
    let addButton = document.getElementById("addListButton" + parkCode);
    if (detailPanel.style.display === "none") {
      detailPanel.style.display = "inherit";
      if (loginButton !== null) {
        addButton.setAttribute("hidden", "hidden");
      }
    }

    else if (detailPanel.style.display === "" || detailPanel.style.display === "inherit") {
      detailPanel.style.display = "none";
      searchPanel.style.display = "inherit";
    }
  }
}