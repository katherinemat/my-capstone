import { Injectable } from '@angular/core';
import axios from 'axios';
import { OfficerInvolvedShooting } from './officer-involved-shooting.model';


@Injectable()
export class PoliceService {

  transformedOfficerInvolvedShootings = [];
  constructor() { }

  getPoliceDataFromSocrata() {
    return axios.get('https://data.seattle.gov/resource/89ww-kmca.json')
    .then((res) => {
      //saves data returned in json to postgres database
      res.data.forEach(object => {
        axios.post('/api/save-officer-related-shootings-to-psql-database', object)
        .then(function(res) {
          console.log(object)
        });
      })
    });
  }

  getPoliceDataFromPsqlDB() {
    return axios.get('/api/get-officer-related-shootings-from-psql-database')
    .then((res) => {
      //transforms database objects into OfficerInvolvedShooting objects. I do this in case we want to exclude or manipulate data in between the database and the front-end
      res.data.forEach(object => {
        this.transformedOfficerInvolvedShootings.push(new OfficerInvolvedShooting(object));
      })
      return this.transformedOfficerInvolvedShootings;
    });
  }
}
