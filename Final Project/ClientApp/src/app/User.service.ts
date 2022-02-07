import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({ providedIn: 'root' })
export class UserService {
    url: string = "User";
    loggedinuser?: User;
    users?: User[] = [];

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

}
