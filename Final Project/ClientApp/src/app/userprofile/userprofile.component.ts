import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
//Check to see if someone is logged in by calling the user table and checking the isLoggedIn field.
//Set up if statements here to show different stuff if a user is logged in or not.
  constructor() { }

  ngOnInit() {
  }

}
