import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Convert } from './Park';

import { ParkDetailsComponent } from './park-details/park-details.component';
import { UserPark } from './UserPark';


@Injectable({ providedIn: 'root' })
export class UserService {
    url: string = "User";
    //loggedInUser?: User;
    users?: User[] = [];
    loggedInUser?: User;


    constructor(private http: HttpClient, @Inject('BASE_URL') baseURL: string) {
        this.url = baseURL + this.url;
    }
    GetUsers(): Observable<object> {
        return this.http.get(this.url + "/users");
        console.log(this.url);
        // let apiurl: string = this.url + "/api";
        // let result: Observable<any> = this.http.get(apiurl);
        // return result;
    }
    GetUser(userId: number): Observable<object> {
        return this.http.get(this.url +"/userId="+ userId);
    }
    UpdateUser(userId: number, user:User){
        return this.http.put(this.url+"/updateUser="+userId, user);
    }
    GetLoggedInUser(cb: any) {
        //Get logged in user to then fill out loggedInUser variable
        let userSearch: User;

        this.http.get(this.url+"/getLoggedInUser").subscribe(
            (response: any) => {
                console.log("***getting logged in user***");
                console.log(response);
                cb(response);
            }
        );
            //this.loggedInUser = userSearch;

        
        
    }
    AddParkToUserList(parkCode: string, user: User){
        // let userPark: UserPark;
        // userPark.userId = 4;
        // console.log();
        // userPark.userId = user.id;
        // userPark.parkCode = parkCode;

        this.http.post(this.url+"/addUserPark="+parkCode, user).subscribe(
            (result:any)=>{console.log(result)}
        );
        console.log(this.url+"/addUserPark="+parkCode, user.email);
        
        
        //console.log(this.loggedInUser.email);
    }
    ValidateUser(username: string, password: string):boolean{
        //change return type to bool once we see a valid response
        let valid:boolean;
        this.http.get(this.url+"/loginu="+username+"p="+password).subscribe(
            (response:any) => {
                valid = response;
                location.reload();
            });
            return valid;
    }
    LogOutUser(user: User){
        this.http.put(this.url+"/logout", user).subscribe(
            (response: any)=>{
                console.log("heading to the controller!");
                location.reload();
            }
        );
    }
}
