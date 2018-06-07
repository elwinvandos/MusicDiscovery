import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Track } from "./models/Track";


@Injectable({
  providedIn: 'root'
})
export class DiscoveryAPIService {

  constructor(private _http:Http) { }

  root_url = "http://localhost:52454";

  postTrack(track:Track) {
    console.log("test");
    var url = this.root_url + "/api/newTrack";
    return this._http.post(url, track)
      .pipe(map(
        (res:Response) => console.log(res),
        (err:Error) => console.log(err)
      ));
  }

  getTrack(trackId:string) {
    var url = this.root_url + "/api/tracks/" + trackId;
    return this._http.get(url)
    .pipe(map((res:Response) => res.json()))
  }

  
}
