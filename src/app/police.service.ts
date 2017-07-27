import { Injectable } from '@angular/core';
import axios from 'axios';
import { OfficerInvolvedShooting } from './officer-involved-shooting.model';
import { SubjectAgeGroup } from './subject-age-group.model';


@Injectable()
export class PoliceService {

  constructor() { }

  getPoliceDataFromSocrata() {
    return axios.get('https://data.seattle.gov/resource/89ww-kmca.json')
    .then((res) => {
      //saves data returned in json to postgres database
      res.data.forEach(object => {
        for(var property in object) {
          if (object.hasOwnProperty(property)) {
            object[property] = object[property].trim();
          }
        }
        axios.post('/api/officer-related-shootings', object)
        .then(function(res) {
          console.log(object)
        });
      })
    });
  }

  getPoliceDataFromPsqlDB() {
    let transformedOfficerInvolvedShootings = [];
    return axios.get('/api/officer-related-shootings')
    .then((res) => {
      //transforms database objects into OfficerInvolvedShooting objects. I do this in case we want to exclude or manipulate data in between the database and the front-end
      res.data.forEach(object => {
        transformedOfficerInvolvedShootings.push(new OfficerInvolvedShooting(object));
      })
      return transformedOfficerInvolvedShootings;
    });
  }

  getGroupedSubjectAges() {
    let transformedSubjectAgeGroups = [];
    return axios.get('/api/grouped-subject-ages')
    .then((res) => {
      res.data.forEach(object => {
        transformedSubjectAgeGroups.push(new SubjectAgeGroup(object));
      })
      return transformedSubjectAgeGroups;
    });
  }

  getPieChartData(param) {
    return axios.post('/api/pie-chart-data', param)
    .then((res) => {
      return res;
    });
  }

  getPoliceDataFromPsqlDBWhereYear(dateRange) {
    let transformedOfficerInvolvedShootings = [];
    return axios.post('/api/officer-involved-shootings-where-year', dateRange)
      .then((res) => {
        res.data.forEach(object => {
          transformedOfficerInvolvedShootings.push(new OfficerInvolvedShooting(object));
        })
        return transformedOfficerInvolvedShootings;
      });
  }
}
