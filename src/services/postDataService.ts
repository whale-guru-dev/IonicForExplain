import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthseviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

let apiurl = "http://54.255.180.40/api/user/";

@Injectable()
export class PostDataServiceProvider {

  constructor(public http: Http) {}

  postData(credentials, type) {
    console.log(credentials);
    return new Promise((resolve, reject) => {
      let header = new Headers({'Content-Type': 'application/json'});  

      this.http.post(apiurl + type, credentials, { headers: header }).subscribe(res => {
        console.log(res);
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
      
    });
  }
}
