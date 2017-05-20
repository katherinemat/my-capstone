import { Component, OnInit } from '@angular/core';
// import { StoryService } from '../story.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  private sidebar: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showSidebar() {
    if(this.sidebar == false) {
      this.sidebar = true;
    } else {
      this.sidebar = false;
    }
  }
}
