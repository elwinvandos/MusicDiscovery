import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Track } from './models/Track';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:Http) { }

  getToken(redirect:string) {
    var client_id = "7181ef614e794414af3353f24a97c5e9";
    var redirect_url = redirect;
    var response_type = "token";
    var url = "https://accounts.spotify.com/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_url + "&response_type=" + response_type;
    window.open(url);
    //encoden met https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp ?
  }

  getTrack(access_token:string, track_id:string):Observable<Track> {
    var url = "https://api.spotify.com/v1/tracks/" + track_id;
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + access_token);
      return this._http.get(url, {headers:headers})
        .pipe(map((res:Response) => res.json()))
  }



}

//client id = 7181ef614e794414af3353f24a97c5e9 
// access_token = BQA-aHsjQkhNnjSYjPkslfycdlQ88ZpzI-39evuoC2OsH01XYad60iJS6BnBjz8YluOrW0YIxXXt5XjQfkM3_zgAXE0Bs2_4IqiyznUkLjJMv_uq2ZBUE8l8ofDNMxy0rgZlP4s
// token_type = Bearer