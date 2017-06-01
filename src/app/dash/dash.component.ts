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
  public selectedSources = ["BBC", "CNN"];
  public stories = [
    new Story('BBC', 'title', 'test author', '01-01-1999', 'http://www.bbc.com/news/live/world-us-canada-40123293', 'https://ichef-1.bbci.co.uk/news/800/cpsprodpb/13CEA/production/_96303118_mediaitem96303117.jpg', 'The UN chief joins leaders of the EU and China in stressing the importance of the Paris agreement'),
    new Story('BBC', 'title2', 'test author2', '09-09-2009', 'http://www.bbc.com/news/world-europe-40117209', 'https://ichef-1.bbci.co.uk/news/800/cpsprodpb/ABCB/production/_96297934_simfmemafp26dec.jpg', 'December\'s Black Sea crash that killed 92 happened after the pilot got disoriented, officials say.'),
    new Story('CNN', 'title', 'test author', '01-01-1999', 'http://www.cnn.com/2017/06/01/politics/trump-latest-paris-climate/index.html', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170525125638-01-merkel-trump-nato-0525-medium-plus-169.jpg', 'President Donald Trump is set to announce his decision to withdraw the US from the Paris climate accord Thursday, a major step that fulfills his campaign promises while seriously dampening global efforts to curb global warming.'),
    new Story('CNN', 'title2', 'test author2', '09-09-2009', 'http://www.cnn.com/2017/06/01/politics/sessions-russian-ambassador-letter/index.html', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170524191043-jeff-sessions-0512-medium-plus-169.jpg', 'A pair of Democratic senators asked then-FBI Director James Comey to investigate Attorney General Jeff Sessions, amid concerns that he may have had an additional meeting with the Russian ambassador the US, Sergey Kislyak, according to letters obtained by CNN Thursday.')
  ];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  //eventually call this function inside of another function that also calls on the service to save source preferences
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

  setPipe(selectedSources) {
    this.selectedSources = selectedSources;
  }

}
