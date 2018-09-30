import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

    console.log('!!! authenticate ', credentials);

    let headers = new HttpHeaders();
    headers = headers.append("Access-Control-Allow-Origin", "*");
    if (credentials) {
      headers = headers.append("Authorization", "Basic " + btoa(credentials.username + ":" + credentials.password));
      headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    }

    console.log('!!! headers ', headers)
    this.http.get('http://localhost:8080/user', { headers: headers }).subscribe(response => {
      if (response && response['name']) {
        console.log('!!! auth true ', response['name']);
        this.authenticated = true;
      } else {
        console.log('!!! auth false');
        this.authenticated = false;
      }
      return callback && callback();
    });
  }
}
