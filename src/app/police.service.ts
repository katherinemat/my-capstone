import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import axios from 'axios';

@Injectable()
export class PoliceService {

  constructor(private http: Http) { }

  getPoliceData() {
    // change this url when project is deployed to the actual url
    axios.get('/api/officer-related-shootings')
      .then((res) => {
        console.log(res);
        return res;
      });
  }

  getPoliceDataFromSocrata() {
    axios.get('https://data.seattle.gov/resource/89ww-kmca.json')
      .then((res) => {
        console.log(res);
      })
  }
}
