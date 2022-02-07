import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({providedIn: 'root'})
export class UserService {
    url: string = "User";
    user?: User;
    users?: User[] = [];

constructor(private http:HttpClient, @Inject('BASE_URL') baseURL: string) {
    this.url = baseURL + this.url;
 }

}
