import { Injectable } from '@angular/core';
import axios from 'axios';
import { TransformDatabaseObjectsService } from './transform-database-objects.service';
import { OfficerInvolvedShooting } from './officer-involved-shooting.model';


@Injectable()
export class PoliceService {

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
    axios.get('https://data.seattle.gov/resource/89ww-kmca.json')
      .then((res) => {
        res.data.forEach(object => {
          res.data.object = new OfficerInvolvedShooting(object);
          console.log(res.data.object);
        })
        // return res;
        // let x = this.transformDatabaseObjectsService.transformOfficerInvolvedShootings(res);
        // console.log(x);
      });
  }
}
