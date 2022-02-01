import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Park } from './Park';

@Injectable({
    providedIn: 'root'
  })
export class ParkService {
url: string = "Park";
park?: Park;
parks?: Park[] = [];
constructor(private http:HttpClient, @Inject('BASE_URL') baseURL: string) { 
this.url = baseURL + this.url;
}
GetParks():Observable<Park[]>{
  let apiurl: string = this.url;
  let result : Observable<any> = this.http.get(apiurl);
  return result;
}
GetParkByParkCode(parkCode:string):Observable<any>{
    let apiurl: string = this.url+"/parkcode="+parkCode;
    let result : Observable<any> = this.http.get(apiurl);
    return result;
  }
}
