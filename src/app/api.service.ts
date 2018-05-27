import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:Http) { }

  getHashParams() {
    var hashParams:any = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getToken() {
    var id = "7181ef614e794414af3353f24a97c5e9";
    var redirect_url = "http://localhost:4200/discover";
    var response_type = "token";
    var url = "https://accounts.spotify.com/authorize?client_id=" + id + "&redirect_uri=" + redirect_url + "response_type=" + response_type;
    return 
  }

  getMusicTrack() {
    var url = "https://api.spotify.com/v1";
  }


}

//client id = 7181ef614e794414af3353f24a97c5e9 