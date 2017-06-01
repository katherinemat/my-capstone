import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [StoryService]
})
export class DashComponent implements OnInit {
  public sidebar = false;
  public stories = [
    new Story('title', 'test author', '01-01-1999', 'http://www.bbc.com/news/live/world-us-canada-40123293', 'https://ichef-1.bbci.co.uk/news/800/cpsprodpb/13CEA/production/_96303118_mediaitem96303117.jpg', 'The UN chief joins leaders of the EU and China in stressing the importance of the Paris agreement'),
    new Story('title2', 'test author2', '09-09-2009', 'http://www.bbc.com/news/world-europe-40117209', 'https://ichef-1.bbci.co.uk/news/800/cpsprodpb/ABCB/production/_96297934_simfmemafp26dec.jpg', 'December\'s Black Sea crash that killed 92 happened after the pilot got disoriented, officials say.'),
    new Story('title', 'test author', '01-01-1999', 'http://www.bbc.com/news/live/world-us-canada-40123293', 'https://ichef-1.bbci.co.uk/news/800/cpsprodpb/13CEA/production/_96303118_mediaitem96303117.jpg', 'The UN chief joins leaders of the EU and China in stressing the importance of the Paris agreement'),
    new Story('title2', 'test author2', '09-09-2009', 'http://www.bbc.com/news/world-europe-40117209', 'https://ichef-1.bbci.co.uk/news/800/cpsprodpb/ABCB/production/_96297934_simfmemafp26dec.jpg', 'December\'s Black Sea crash that killed 92 happened after the pilot got disoriented, officials say.')
  ];

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

  navigate(clickedStory: string) {
    window.open(clickedStory, "_blank");
  }

}
