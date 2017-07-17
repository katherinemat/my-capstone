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
        for (var i = 0; i < res.data.stories.length; i++) {
          var story = res.data.stories[i];
          axios.post('/api/saveStories', {
            newTitle: story.title,
            newAuthor: story.author.name,
            newDate: story.publishedAt,
            newLink: story.links.permalink
          })
          .then(function (res) {
            console.log(res);
          });
        }
      });
  }

//having trouble accessing this function from component because component thinks this returns void with .then and returns type AxiosPromise if I just return axios.get
  displayStories() {
    // return axios.get('/api/displayStories');
    // let response = [];
    return axios.get('/api/displayStories')
      .then((res) => {
        console.log(res.data);
        // response = res;
        return res.data;
      });

    // return response;
  }
}
