import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [StoryService]
})

export class SidebarComponent implements OnInit {
  @Output() doneSavePreferences = new EventEmitter();
  @Output() changeSources = new EventEmitter();

  options = [
    {name:'CNN', value:'CNN', checked:false},
    {name:'BBC', value:'BBC', checked:false},
    {name:'Fox News', value:'Fox+News', checked:false},
    {name:'NPR', value:'NPR', checked:false},
    {name:'ESPN US', value:'ESPN+US', checked:false},
    {name:'Bloomberg', value:'Bloomberg', checked:false},
    {name:'CBS Sports', value:'CBS+Sports', checked:false},
    {name:'CBS News', value:'CBS+News', checked:false},
    {name:'Huffington Post', value:'Huffington+Post', checked:false},
    {name:'Al Jazeera', value:'Al+Jazeera', checked:false},
    {name:'The Washington Post', value:'The+Washington+Post', checked:false},
    {name:'Yahoo', value:'Yahoo', checked:false}
  ]

  selectedSources = [];

  get selectedOptions() {
    return this.options
    .filter(opt => opt.checked)
    .map(opt => opt.value)
  }

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  getStories() {
    this.storyService.getStories();
    this.doneSavePreferences.emit();
  }

  onChange() {
    this.selectedSources = [];
    for(let i of this.options) {
      if (i.checked === true) {
        this.selectedSources.push(i.name);
      }
    }
    this.changeSources.emit(this.selectedSources);
  }

  sendPreferences() {

  }

}
