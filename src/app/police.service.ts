import { Injectable } from '@angular/core';
import axios from 'axios';
import { OfficerInvolvedShooting } from './officer-involved-shooting.model';


@Injectable()
export class PoliceService {

  transformedOfficerInvolvedShootings = [];
  constructor() { }

  getPoliceData() {
    // change this url when project is deployed to the actual url
    axios.get('/api/officer-related-shootings')
      .then((res) => {
        return res;
      });
  }

  getPoliceDataFromSocrata() {
    return axios.get('https://data.seattle.gov/resource/89ww-kmca.json')
      .then((res) => {
        //transforms database objects into OfficerInvolvedShooting objects. I do this in case we want to exclude or manipulate data in between the database and the front-end
        console.log(res.data[0]);
        axios.post('/api/save-officer-related-shootings-to-psql-database', res.data[0])
        .then(function (res) {
          console.log(res);
        });
        // res.data.forEach(object => {
        //   // var story = res.data.stories[i];
        //   // this.transformedOfficerInvolvedShootings.push(new OfficerInvolvedShooting(object));
        // })
        // return this.transformedOfficerInvolvedShootings;
      });
  }
}
