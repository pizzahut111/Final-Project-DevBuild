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
constructor(private http:HttpClient) { 

}
GetParkByParkCode(parkCode:string):Observable<Object>{
    let url: string = "https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=dD5Z8MilCF87nuaBngedmFcF1vDCl2hqdblh89yh";
    let result : Observable<any> = this.http.get(url);
    return result;
  }
}
