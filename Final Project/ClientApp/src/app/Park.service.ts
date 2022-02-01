import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Park } from './Park';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  url: string = "park";
  park?: Park;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.url = baseUrl + this.url;
  }
  GetParkByParkCode(parkCode: string): Observable<any> {

    let parkUrl: string = this.url + "/parkCode=" + parkCode;
    let result: Observable<any> = this.http.get(parkUrl);
    return result;
  }
}
