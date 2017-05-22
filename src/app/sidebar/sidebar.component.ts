import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [StoryService]
})

export class SidebarComponent implements OnInit {

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  getStories() {
    this.storyService.getStories();
  }

}
