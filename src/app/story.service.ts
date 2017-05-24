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
          console.log(story.title);
          console.log(story.author.name);
          console.log(story.body);
          console.log(story.links.permalink);
          console.log(story.publishedAt);
        }
        // knex.schema.table('stories', function(table) {
        //   table.
        //   some function that adds data to rows
        // })
      });
  }
}
