import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getToken(redirect:string) {
    var client_id = "7181ef614e794414af3353f24a97c5e9";
    var redirect_url = redirect;
    var response_type = "token";
    var url = "https://accounts.spotify.com/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_url + "&response_type=" + response_type;
    window.open(url);
    //encoden met https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp ?
  }
}

//client id = 7181ef614e794414af3353f24a97c5e9 
// access_token = BQA-aHsjQkhNnjSYjPkslfycdlQ88ZpzI-39evuoC2OsH01XYad60iJS6BnBjz8YluOrW0YIxXXt5XjQfkM3_zgAXE0Bs2_4IqiyznUkLjJMv_uq2ZBUE8l8ofDNMxy0rgZlP4s
// token_type = Bearer