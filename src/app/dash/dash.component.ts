import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  public sidebar = false;
  constructor() { }

  ngOnInit() {
  }

  showSidebar() {
    if (this.sidebar === false) {
      this.sidebar = true;
    } else {
      this.sidebar = false;
    }
  }

}
