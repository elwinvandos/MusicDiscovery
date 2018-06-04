import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Track } from '../models/Track';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {

  constructor(private api:ApiService) { }

  track:Track;
  access_token:any;
  queryString:string;
  artists:Artist[];

  ngOnInit() {
    this.access_token = this.getAccessToken();
  }

  loginSpotify() {
    var redirect = "http://localhost:4200/discover";
    this.api.getToken(redirect);
  }

  fetchTrack() {
    if (this.access_token == null) {
      throw new Error ('access_token is null')
    }
    else {
      this.api.getTrack(this.access_token, "23cfaVuGWVpwsrX7lqaD3h")
        .subscribe(res => {
          this.track = res;
        })
    } 
  }

  searchArtist() {
    if (this.access_token == null) {
      throw new Error ('access_token is null')
    }
    else {
      var type = 'artist';
      this.api.getSearch(this.access_token, this.queryString, type)
        .subscribe(res => {
          this.artists = res.artists.items;
          console.log(this.artists);
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