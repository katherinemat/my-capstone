import { Injectable } from '@angular/core';
import axios from 'axios';
import { OfficerInvolvedShooting } from './officer-involved-shooting.model';
import { SubjectAgeGroup } from './subject-age-group.model';


@Injectable()
export class PoliceService {

  transformedOfficerInvolvedShootings = [];
  transformedSubjectAgeGroups = [];

  constructor() { }

  getPoliceDataFromSocrata() {
    return axios.get('https://data.seattle.gov/resource/89ww-kmca.json')
    .then((res) => {
      //saves data returned in json to postgres database
      res.data.forEach(object => {
        axios.post('/api/officer-related-shootings', object)
        .then(function(res) {
          console.log(object)
        });
      })
    });
  }

  getPoliceDataFromPsqlDB() {
    return axios.get('/api/officer-related-shootings')
    .then((res) => {
      //transforms database objects into OfficerInvolvedShooting objects. I do this in case we want to exclude or manipulate data in between the database and the front-end
      res.data.forEach(object => {
        this.transformedOfficerInvolvedShootings.push(new OfficerInvolvedShooting(object));
      })
      return this.transformedOfficerInvolvedShootings;
    });
  }

  getGroupedSubjectAges() {
    return axios.get('/api/grouped-subject-ages')
    .then((res) => {
      res.data.forEach(object => {
        this.transformedSubjectAgeGroups.push(new SubjectAgeGroup(object));
      })
      return this.transformedSubjectAgeGroups;
    });
  }
}
