import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';
//import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {

  constructor(private api:ApiService) { }

  stateKey:any = "spotify_auth_state";

  ngOnInit() {
  }

  // connectSpotify() {
  //   var id = "7181ef614e794414af3353f24a97c5e9";
  //   var redirect_url = "http://localhost:4200/discover";
  //   var response_type = "token";
  //   var url = "https://accounts.spotify.com/authorize?client_id=" + id + "&redirect_uri=" + redirect_url + "&response_type=" + response_type;
  //   //to do: encoden met https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
  //   window.location.href = url;
  // }

  loginSpotify() {
    var redirect = "http://localhost:4200/discover";
    this.api.getToken(redirect);
  }

  fetchTrack() {
    var access_token = this.getAccessToken();
    console.log("Access token is: " + access_token);
  }

  getAccessToken() {
    return this.getParameterByName('access_token');
  }

  getParameterByName(name:any) {
    var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
}