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
        console.log(response);
        let json = Convert.parkToJson(response);
        this.park = Convert.toPark(json);
        console.log(this.park);
      }
    );
  }
  ngOnInit() {
  }
  SearchPark() {
    this.searchedpark.length = 0;
    let parkSearch: string = (<HTMLInputElement>document.getElementById("parkSearch")).value;
    console.log(parkSearch);
    for (let i = 0; i <= this.park.data.length; i++) {
      if (this.park.data[i].fullName.toLowerCase().includes(parkSearch.toLowerCase())) {
        this.searchedpark.push(this.park.data[i]);
        console.log("It works");
        console.log(this.searchedpark);
      }
    }
    //if(this.park.data.includes())
    //this.movieService.CreateMovie(newMovie).subscribe(
    //  (response: any) => { location.reload() }
    //);
  }
  ExpandDetails(parkCode: string){
    //let searchPanel = document.getElementById("search"+parkCode);
    let detailPanel = document.getElementById("detail"+parkCode);
    let searchPanel = document.getElementById("search"+parkCode);
    if (detailPanel.style.display === "none")
    {
      detailPanel.style.display = "inherit";
      //searchPanel.style.display = "none";
      //can I change the searchPanel to display like our details h4 tag?
      let searchParent = searchPanel.parentNode;
      let searchElement=document.createElement("h4");
      searchElement.textContent=searchPanel.textContent;
      searchElement.id=searchPanel.id;
      searchParent.replaceChild(searchElement, searchPanel);

      //console.log("does this display details?");
    }
    //this else if would actually live in a similar function on the details component
    else if (detailPanel.style.display === "" || detailPanel.style.display === "inherit")
    {
      detailPanel.style.display = "none";
      let searchParent = searchPanel.parentNode;
      let searchElement=document.createElement("p");
      searchElement.textContent=searchPanel.textContent;
      searchElement.id=searchPanel.id;
      searchParent.replaceChild(searchElement, searchPanel);
      console.log("hiding display");
    }
  }
}