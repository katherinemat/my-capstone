import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StoryService {

  constructor(private http: Http) { }

  getStories() {
    // let headers = new Headers({ 'X-AYLIEN-NewsAPI-Application-ID': '440541ee' }, { 'X-AYLIEN-NewsAPI-Application-Key': 'b6185cbe079502c701acd1e10d6a6de8' });
    //
    // let options = new RequestOptions({ headers: headers });
    //
    // let result = this.http.get('https://api.newsapi.aylien.com/api/v1/stories?published_at.start=NOW-1DAYS&published_at.end=NOW&categories.id%5B%5D=IAB2&categories.taxonomy=iab-qag&source.name%5B%5D=CNN&sort_by=recency', options);
    //
    // console.log(result);
    // return result;
    // let result = this.http.get('https://api.newsapi.aylien.com/api/v1/stories?published_at.start=NOW-1DAYS&published_at.end=NOW&categories.id%5B%5D=IAB2&categories.taxonomy=iab-qag&source.name%5B%5D=CNN&sort_by=recency')
    // .map((res:Response) => res.json());
    // return result;
  }
}
