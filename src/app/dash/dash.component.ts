import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [StoryService]
})
export class DashComponent implements OnInit {
  public sidebar = false;
  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  showSidebar() {
    if (this.sidebar === false) {
      this.sidebar = true;
    } else {
      this.sidebar = false;
    }
  }

  displayStories() {
    this.storyService.displayStories();
  }

}
