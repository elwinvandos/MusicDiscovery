import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Track } from '../models/Track';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {

  constructor(private api:ApiService) { }

  track:Track;

  ngOnInit() {
  }

  loginSpotify() {
    var redirect = "http://localhost:4200/discover";
    this.api.getToken(redirect);
  }

  fetchTrack() {
    var access_token = this.getAccessToken();
    console.log("Access token is: " + access_token);

    if (access_token == null) {
      throw new Error ('access_token is null')
    }
    else {
      this.api.getTrack(access_token, "23cfaVuGWVpwsrX7lqaD3h")
        .subscribe(res => {
          this.track = res;
        })
    } 
  }

  getAccessToken() {
    return this.getParameterByName('access_token');
  }

  getParameterByName(name:any) {
    var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
}