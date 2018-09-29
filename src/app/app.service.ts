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

        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'});

        if (credentials) {
          headers['authorization'] = 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        }
        console.log('!!! headers ', headers)
        this.http.get('http://localhost:8080/user', {headers: headers}).subscribe(response => {
            if (response && response['name']) {
                console.log('!!! auth true');
                this.authenticated = true;
            } else {
              console.log('!!! auth false');
                this.authenticated = false;
            }
            return callback && callback();
        });
    }
}
