import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import axios from 'axios';

@Injectable()
export class StoryService {

  constructor(private http: Http) { }

  getStories() {
    // change this url when project is deployed to the actual url
    axios.get('/api/stories')
      .then((res) => {
        console.log(res);
      });
  }
}
