import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';
import { DiscoveryAPIService } from '../discovery-api.service';

@Component({
  selector: 'app-artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.scss']
})
export class ArtistpageComponent implements OnInit {

  constructor(private api:ApiService, private route:ActivatedRoute, private discovery_api:DiscoveryAPIService) { }

  access_token:any;
  artistId: number;
  artist:Artist;
  tracks:Track[];

  ngOnInit() {
    this.access_token = localStorage.getItem('token');
    this.route.params.subscribe(params => {this.artistId = params['id']});
    console.log('artist id is ' + this.artistId);

    this.api.getArtist(this.access_token, this.artistId)
      .subscribe(res => {
        this.artist = res;
      });

    this.api.getTopTracks(this.access_token, this.artistId, 'BE')
      .subscribe(res => {
        this.tracks = res.tracks;
      });
  }

  addTrack(track:Track) {
    this.discovery_api.postTrack(track).subscribe(res => {
      console.log(res);
    })
    track.hasBeenAdded = true;
  }

}
