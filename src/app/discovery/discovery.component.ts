import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {

  constructor(private http:Http) { }

  stateKey:any = "spotify_auth_state";

  ngOnInit() {
  }

  getHashParams() {
    var hashParams:any = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);

    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  fetchTrack() {
    var params = this.getHashParams();
    var access_token = params.access_token;
    var state = params.state;
    var storedState = localStorage.getItem(this.stateKey);

    if (access_token && (state == null || state !== storedState)) {
      alert("Problem with authentication");
    } else {
      localStorage.removeItem(this.stateKey);
      if (access_token) {
        this.http.post("https://api.spotify.com/v1/me", {'Auhorization': 'Bearer' + access_token});
      }
    }
  }

}
