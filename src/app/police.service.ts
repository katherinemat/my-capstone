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
        console.log(res);
        return res;
      });
  }

  getPoliceDataFromSocrata() {
    return axios.get('https://data.seattle.gov/resource/89ww-kmca.json')
      .then((res) => {
        //transforms database objects into OfficerInvolvedShooting objects. I do this in case we want to exclude or manipulate data in between the database and the front-end
        res.data.forEach(object => {
          this.transformedOfficerInvolvedShootings.push(new OfficerInvolvedShooting(object));
        })
        console.log(this.transformedOfficerInvolvedShootings);
        return this.transformedOfficerInvolvedShootings;
      });
  }
}
