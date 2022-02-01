import { Component, Input, OnInit } from '@angular/core';
import { Park } from '../Park';
import { ParkService } from '../Park.service';

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css']
})
export class ParkDetailComponent implements OnInit {
  @Input() parkCode: string;

  park?: Park;

  constructor(private parkService: ParkService) { }

  ngOnInit() {
    console.log();
    this.parkService.GetParkByParkCode(this.parkCode).subscribe(
      (response: any) => {
        console.log(response);
        this.park = response;
      }
    );
  }

}
