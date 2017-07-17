import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import axios from 'axios';
import { OfficerInvolvedShooting } from './officer-involved-shooting.model';

@Injectable()
export class TransformDatabaseObjectsService {

  constructor() { }
  transformedObjects = [];

  transformOfficerInvolvedShootings(data: any) {
    if (Array.isArray(data)) {
      data.forEach(object => {
        this.transformedObjects.push(new OfficerInvolvedShooting(object));
      });
    } else {
      this.transformedObjects.push(new OfficerInvolvedShooting(data));
    }
    return this.transformedObjects;
  }
}
// /Users/katherinematthews/desktop/dashboard/src/app/transform-database-objects.service.ts
//
// /Users/katherinematthews/desktop/dashboard/src/app/officer-involved-shooting.model.ts
