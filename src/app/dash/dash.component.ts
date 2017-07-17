import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { PoliceService } from '../police.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [StoryService, PoliceService]
})

export class DashComponent implements OnInit {
  public sidebar = false;
  public selectedSources = ["BBC", "CNN"];
  public stories;

  constructor(private storyService: StoryService, private policeService: PoliceService) { }

  ngOnInit() {
    this.stories = this.storyService.displayStories();
  }

  //eventually call this function inside of another function that also calls on the service to save source preferences
  showSidebar() {
    if (this.sidebar === false) {
      this.sidebar = true;
    } else {
      this.sidebar = false;
    }
  }

  getPoliceData() {
    this.policeService.getPoliceDataFromSocrata();
  }

  navigate(clickedStory: string) {
    window.open(clickedStory, "_blank");
  }

  setPipe(selectedSources) {
    this.selectedSources = selectedSources;
  }

}
